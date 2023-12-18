import React, { useEffect, useState } from 'react';
import Blog from "../Blog/Blog";
import './Blogs.css';
const Blogs = ({AddToBookmark, MarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch ('blogs.json')
        .then (res => res.json())
        .then (data => setBlogs(data))
    }, []);
    return (
        <div className='main-container'>
            <div className="blog-item-container">
                <h1>Blogs : {blogs.length}</h1>
                {
                    blogs.map(blg => <Blog
                    key = {blg.id}
                    blog = {blg}
                    AddToBookmark={AddToBookmark}
                    MarkAsRead={MarkAsRead}
                    ></Blog>)
                }
            </div>
            <div className="blog-bookmarked-container">
                
            </div>
        </div>
    );
};

export default Blogs;