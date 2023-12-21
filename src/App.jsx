// App.jsx
import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmark from './components/Bookmark/Bookmark';
import Header from './components/Header/Header';

function App() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [totalReadingTime, setTotalReadingTime] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const addToBookmark = (blog) => {
    setBookmarkedBlogs([...bookmarkedBlogs, blog]);
    setTotalReadingTime((prevTotalTime) => prevTotalTime + blog.reading_time);
  };

  const markAsRead = (selectedBlog) => {
    // Your logic to mark a blog as read goes here
    // For now, let's just set the title of the read blog
    const foundBlog = blogs.find((blog) => blog.id === selectedBlog.id);

    // Add the blog to the bookmarked list
    setBookmarkedBlogs([...bookmarkedBlogs, { ...foundBlog, reading_time: foundBlog.reading_time }]);
    setTotalReadingTime((prevTotalTime) => prevTotalTime + foundBlog.reading_time);
  };

  return (
    <>
      <Header />
      <Blogs AddToBookmark={addToBookmark} MarkAsRead={markAsRead} setBlogs={setBlogs} />
      <Bookmark bookmarkedBlogs={bookmarkedBlogs} totalReadingTime={totalReadingTime} />
    </>
  );
}

export default App;
