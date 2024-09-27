import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Admissions</h3>
          <ul>
            <li>Admission Information</li>
            <li>How to Apply</li>
            <li>Lateral Entry</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>AICTE Feedback Link for Students & Faculties</li>
            <li>Rules and Regulations</li>
            <li>Audit Statements</li>
            <li>Financial Rules and Regulations</li>
            <li>Human Resource Policy</li>
            <li>Green Campus Highlights</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Extra-Curricular</h3>
          <ul>
            <li>Sports & Cultural</li>
            <li>NSS</li>
            <li>YRC</li>
            <li>CCC</li>
            <li>Unnat Bharat Abhiyan</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>For Admissions</h3>
          <div className="footer-section-items">
            <div className='fsi'>
              <img className='ic' src='/address-icon.png' /><p> Bangalore Trunk Road, Varadharajapuram, Poonamallee, Chennai – 600 123.</p>
            </div>
            <div className='fsi'>
              <img className='ic' src='/mobile.svg' /><p>+91-90438 91272 / 90438 90983</p>
            </div>
            <div className='fsi'>
            <img className='ic' src='/phone-icon.png' /><p>+044 -26490404 / 0505 / 0717</p>
            </div>
            <div className='fsi'>
              <img className='ic' src='/mail.png' /><p>info@panimalar.ac.in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Panimalar Engineering College. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;