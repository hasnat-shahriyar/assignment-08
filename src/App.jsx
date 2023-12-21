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
  };

  const markAsRead = (selectedBlog) => {
    const foundBlog = blogs.find((blog) => blog.id === selectedBlog.id);

    // Update the total reading time
    setTotalReadingTime(totalReadingTime + foundBlog.reading_time);

    // Add the blog to the bookmarked list
    setBookmarkedBlogs([...bookmarkedBlogs, { ...foundBlog, reading_time: foundBlog.reading_time }]);
  };

  return (
    <>
      <Header />
      <Bookmark bookmarkedBlogs={bookmarkedBlogs} totalReadingTime={totalReadingTime} />
      <Blogs AddToBookmark={addToBookmark} MarkAsRead={markAsRead} setBlogs={setBlogs} />
    </>
  );
}

export default App;
