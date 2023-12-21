import React from 'react';
import './MarkAsRead.css';
const MarkAsRead = ({  markAsRead}) => {
  console.log({markAsRead});
  const totalReadingTime = markAsRead.reduce((acc, curr)=>acc + curr.reading_time, 0);
  return (
    <div className='mar-container'>
      <p>Spent time on read: {totalReadingTime} min</p>
    </div>
  );
};

export default MarkAsRead;
