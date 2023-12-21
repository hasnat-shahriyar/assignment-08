// Bookmark.jsx
import React from 'react';
import MarkAsRead from '../MarkAsRead/MarkAsRead';
import './Bookmark.css';

const Bookmark = ({ bookmarkedBlogs, totalReadingTime }) => {
  return (
    <>
      <MarkAsRead totalReadingTime={totalReadingTime} />
      <div>
        <h2>Bookmarked Blogs: {bookmarkedBlogs.length}</h2>
        {bookmarkedBlogs.map((blog, index) => (
          <h2 key={index}>Title: {blog.title}</h2>
        ))}
      </div>
    </>
  );
};

export default Bookmark;
