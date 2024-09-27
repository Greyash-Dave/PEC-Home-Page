import React from 'react';
import './BulletinBoard.css';

const BulletinBoard = ({ bulletins }) => {
  const handleClick = (bulletin) => {
    alert(`You clicked on: ${bulletin}`);
  };

  return (
    <div className="bulletin-board">
      <h1>Announcements</h1>
      {bulletins.map((bulletin, index) => (
        <div key={index} className="bulletin-item" onClick={() => handleClick(bulletin)}>
          <p>{'> ' + bulletin}</p>
        </div>
      ))}
    </div>
  );
};

export default BulletinBoard;
