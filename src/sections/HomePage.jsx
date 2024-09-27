import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './HomePage.css'
import VideoSrc from '/PEC-Homepage-Video.mp4';
import Card from '../components/Card';
import BulletinBoard from '../components/BulletinBoard';

function HomePage() {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const [cards, setCards] = useState([
      { id: 1, image: '/card-image-1.jpg', desc: 'Card 1' },
      { id: 2, image: '/card-image-2.jpg', desc: 'Card 2' },
      { id: 3, image: '/card-image-3.png', desc: 'Card 3'},
      { id: 4, image: '/card-image-4.jpg', desc: 'Card 4' },
      { id: 5, image: '/card-image-5.jpg', desc: 'Card 5' },
  ]);

  useEffect(() => {
      const interval = setInterval(() => {
          if (!isHovering) {
              setCurrentCardIndex((prevIndex) => 
                  (prevIndex + 1) % cards.length
              );
          }
      }, 2000); // Change slide every 5 seconds

      return () => clearInterval(interval);
  }, [isHovering, cards.length]);

  // ... other useEffects and functions ...

  const visibleCards = () => {
      let visibleIndices = [
          currentCardIndex,
          (currentCardIndex + 1) % cards.length, // Add one more card for smooth transition
          (currentCardIndex + 2) % cards.length,
          (currentCardIndex + 3) % cards.length,

      ];
      return visibleIndices.map(index => cards[index]);
  };


    const [bulletins, setBulletins] = useState([
        "First bulletin message",
        "Second bulletin message",
        "Third bulletin message", 
        "Fourth bulletin message",
        "Fifth bulletin message",
        "Sixth bulletin message",
        "Seventh bulletin message",
        "Eighth bulletin message",
        "Ninth bulletin message",
        "Tenth bulletin message"
    ]);

    const togglePlay = () => {
      const video = videoRef.current;
      if (video.paused) {
        video.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.log("Play failed:", error);
        });
      } else {
        video.pause();
        setIsPlaying(false);
      }
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        
        if (videoElement) {
            videoElement.addEventListener('play', () => setIsPlaying(true));
            videoElement.addEventListener('pause', () => setIsPlaying(false));

            return () => {
                videoElement.removeEventListener('play', () => setIsPlaying(true));
                videoElement.removeEventListener('pause', () => setIsPlaying(false));
            };
        }
    }, []);

    useEffect(() => {
      const videoElement = videoRef.current;
      if (videoElement) {
        const playVideo = () => {
          videoElement.play().catch(error => {
            console.log("AutoPlay prevented: ", error);
          });
          videoRef.current.muted = false;
        };
    
        videoElement.addEventListener('loadedmetadata', playVideo);
        return () => videoElement.removeEventListener('loadedmetadata', playVideo);
      }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const videoElement = videoRef.current;
    
          if (videoElement) {
            // You can adjust this threshold as needed
            const muteThreshold = 500; // pixels
    
            if (scrollPosition > muteThreshold) {
              videoElement.muted = true;
            } else {
              videoElement.muted = false;
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    
    return (
        <>
        <div className="video-container">
            <div className="button-layer">
            <button onClick={togglePlay}>
              {isPlaying ? <img className='player-icon' src='/pause-button.png' /> : <img className='player-icon' src='/play-button.png' />}
            </button>
            </div>
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          src={VideoSrc}
          type="video/mp4"
        />
        </div>
        <div className="hero-section">
                <div className="card-section">
                    <h1>UPCOMING EVENTS</h1>
                    <div 
                        className="card-container"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <AnimatePresence initial={false}>
                            <motion.div
                                key={currentCardIndex}
                                className="cards-wrapper"
                                initial={{ x: "0%" }}
                                animate={{ x: "-30%" }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {visibleCards().map((card, index) => (
                                    <motion.div key={card.id} className="card-wrapper">
                                        <Card 
                                            image={card.image} 
                                            desc={card.desc} 
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <hr />
                </div>
                <div className="bulletin-section">
                    <BulletinBoard bulletins={bulletins} />
                </div>
            </div>
            {/* <div className="pec-research">
              <h1>#Research @ Panimalar</h1>
              <p>Explore the breakthrough projects that are happening at Panimalar in various departments</p>
            </div> */}
            <div className="pec-incubationlab">
              <h1>Incubation Labs</h1>
              <div className="il-cards">
                <div className="ilcard x">
                  <img src="/techm.png"></img>
                  <h2>TECH Mahindra</h2>
                  <p>Enhancing skills in company-required domains leads to increased salary packages. This targeted skill development ensures employees are well-equipped for their roles, boosting their value and career.</p>
                </div>
                <div className="ilcard z">
                  <img src="/landt.png"></img>
                  <h2>Larsen & Toubro</h2>
                  <p>The PEC and L&T collaboration aims to enhance research, develop innovative solutions, and enrich student and faculty learning.</p>
                </div>
                <div className="ilcard x">
                  <img src="/oracle.png"></img>
                  <h2>ORACLE</h2>
                  <p>Oracle Global Certification in Java, Machine Learning, Oracle Cloud Infrastructure, and Generative AI provides a solid foundation for career advancement.</p>
                </div>
                <div className="ilcard z">
                  <img src="/tansam.png"></img>
                  <h2>TANSAM</h2>
                  <p>Students trained in Data Analytics, Web Development, Industry IoT, and Industry 4.0 have completed their internships and are now working on real-world projects.</p>
                </div>
                <div className="ilcard z">
                  <img src="/lirdigital.png"></img>
                  <h2>LIRDigital</h2>
                  <p>Dr.Issa Al –Hashimi , CEO of LIRDigital, UAE associated with Panimalar Engineering College, Chennai, for establishing Centre of Excellence in Generative AI.</p>
                </div>
                <div className="ilcard x">
                  <img src="/prag.png"></img>
                  <h2>Prag Robotics</h2>
                  <p>The Center of Excellence in Robotics at Panimalar Engineering College, in collaboration with Plag Robotics, aims to create intelligent robots (EVA) and build technical relationships for undergraduates.</p>
                </div>
                <div className="ilcard z">
                  <img src="/dronix.png"></img>
                  <h2>Dronix</h2>
                  <p>The Center of Excellence in Drones at Panimalar Engineering College, with Vimanam Air Technical Pvt Ltd, aims to create new drone products and foster technical relationships for undergraduates.</p>
                </div>
                <div className="ilcard x">
                  <img src="/nvh.png"></img>
                  <h2>NVH</h2>
                  <p>The Centre of Excellence in NVH and NDT at Panimalar Engineering College, established with Atalon Product Centre Pvt Ltd, provides students with hands-on training and state-of-the-art facilities.</p>
                </div>
              </div>
            </div>
            <div className="pec-alumini-testimonials">
              <h1>Alumni Testimonials</h1>
              <div className="testimonials">
                <div className="pec-at">
                  <div className="at">
                    <p>"I always Thank Panimalar College for what I am today and close to my Heart. The 2 Years course helped to mold me to reach this Level. Great support from all the management staffs. Personal Development, Workshops , Guest Lectures, Case Studies, Projects, Internship are some of the key methods which college focuses on that helps the student to keep abreast of current Trends."</p>
                  </div>
                  <img src="/at (1).jpg" />
                  <div className="ad">
                    <h2>SARAVANA IYYAPPAN</h2>
                    <h3>Deputy Manager, Ford Motors Pvt. Ltd</h3>
                  </div>
                </div>
                <div className="pec-at">
                  <div className="at">
                    <p>"Panimalar engineering college is one of the finest private educational institutions of Chennai. It has an advanced curriculum which not only develops students learning knowledge theoretical from the esteemed faculties, but it also helps them to get an insight of the industry through the exposure of industrial experts and practical learning experiences."</p>
                  </div>
                  <img src="/at (2).jpg" />
                  <div className="ad">
                    <h2>JAMES BABU MATHEW</h2>
                    <h3>PMO, Capgemini, Bangalore</h3>
                  </div>
                </div>
                <div className="pec-at">
                  <div className="at">
                    <p>"From this college, I learned a good exposure like multicultural activities, people skills, the ability to work in high pressure situation, disciplined, analytical skills, communication and confidential skills, best teachers guidance , skills and experience help me both in my career and in like in general."</p>
                  </div>
                  <img src="/at (3).jpg" />
                  <div className="ad">
                    <h2>S. VIJAY</h2>
                    <h3>General Manager , RIKUN Manufacturing Pvt Ltd</h3>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default HomePage