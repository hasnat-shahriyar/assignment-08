import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css';
const Blog = ({blog, AddToBookmark, MarkAsRead}) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    
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
                    className='btn-bookmark'
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
                <button onClick={() => MarkAsRead(id, reading_time)} className='btn-mark'>
                    Mark As Read
                </button>
            </div>
        </div>
    );
};

export default Blog;