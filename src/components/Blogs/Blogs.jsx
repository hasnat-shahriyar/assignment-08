// Blogs.jsx
import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import './Blogs.css';

const Blogs = ({ AddToBookmark, handleMarkAsRead, setBlogs , bookmarkedBlogs}) => {
  const [blogs, setBlogsState] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((data) => {
        setBlogsState(data);
        setBlogs(data);
      });
  }, [setBlogs]);

  return (
    <div className='main-container'>
      <div className='blog-item-container'>
        <h1>Blogs : {blogs.length}</h1>
        {blogs.map((blg) => (
          <Blog
            key={blg.id}
            blog={blg}
            AddToBookmark={AddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
            bookmarkedBlogs={bookmarkedBlogs}
          />
        ))}
      </div>
      <div className='blog-bookmarked-container'></div>
    </div>
  );
};

export default Blogs;