import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Blog = ({blog}) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`Title Image ${title}`} />

            <div>
                <img src={author_img} alt="" />
                <div>
                    <h3>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} min read</span>
                <button 
                onClick={() => handleAddToBookmark(blog)}
                className='btn-bookmark'
                >
                    <FontAwesomeIcon icon={faBookmark} />
                </button>
            </div>
            <h2>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key = {idx}> <a href=''>#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

export default Blog;