import React, { useEffect, useState } from 'react';
import Blog from "../Blog/Blog";
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch ('blogs.json')
        .then (res => res.json())
        .then (data => setBlogs(data))
    }, []);
    return (
        <div>
            <h1>Blogs : {blogs.length}</h1>
            {
                blogs.map(blg => <Blog
                key = {blg.id}
                blog = {blg}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;