import React from 'react';
import './Card.css';

function Card({ image, desc, style }) {
  return (
    <div className="card" style={style}>
      <div className="card-image">
        <img src={image} alt="Description of the image" />
      </div>
      <hr />
      <div className="card-lower">
        <div className="card-desc">
          <p>{desc}</p>
        </div>
        <div className="card-button">
          <button>Read More</button> 
        </div>
      </div>
    </div>
  );
}

export default Card;