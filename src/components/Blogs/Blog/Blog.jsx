import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css';
const Blog = ({blog, AddToBookmark, handleMarkAsRead, bookmarkedBlogs}) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog || {};
    const bookmarkBtnClass = bookmarkedBlogs.findIndex(i=>i.id === id) < 0 ? "inactive_btn_bookmark" : "active_btn_bookmark"
    
    return (
        <div className='blog-container'>
            <div className='blog-banner'>
                <img src={cover} alt={`Title Image ${title}`} />
            </div>
            <div className='blog-info'>
                <div className='blog-author'>
                    <img src={author_img} alt="" />
                    <div className='info'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='bookmark'>
                    <p className='read-time'>{reading_time} min read</p>
                    <button 
                    onClick={() => AddToBookmark(blog)}
                    className={`btn-bookmark ${bookmarkBtnClass}`}
                    >
                        <FontAwesomeIcon icon={faBookmark} />
                    </button>
                </div>
            </div>
            <h2 className='title'>{title}</h2>
            <p className='hashtag'>
                {
                    hashtags.map((hash, idx) => <span key = {idx}> <a href=''>#{hash}</a> </span>)
                }
            </p>
            
            <div className='mark-container'>
                <button onClick={() => handleMarkAsRead(blog)} className='btn-mark'>
                Mark As Read
                </button>
            </div>
            </div>
  );
};

export default Blog;