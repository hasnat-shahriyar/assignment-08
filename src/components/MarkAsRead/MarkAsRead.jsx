import React from 'react';
import './MarkAsRead.css';
const MarkAsRead = ({ totalReadingTime }) => {
  return (
    <div className='mar-container'>
      <p>Spent time on read: {totalReadingTime} min</p>
    </div>
  );
};

export default MarkAsRead;
