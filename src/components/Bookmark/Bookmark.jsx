import React from 'react';
import MarkAsRead from '../MarkAsRead/MarkAsRead';
import './Bookmark.css';

const Bookmark = ({ bookmarkedBlogs, totalReadingTime }) => {
  return (
    <>
    <div className='bookmark-container'>
    <MarkAsRead totalReadingTime={totalReadingTime} />
      <div className='bookmark-card'>
        <h2 className='bookmarked-blogs'>Bookmarked Blogs: {bookmarkedBlogs.length}</h2>
        {bookmarkedBlogs.map((blog, index) => (
          <h2 className='book-title' key={index}>Title: {blog.title}</h2>
        ))}
      </div>
    </div>
    </>
  );
};

export default Bookmark;
