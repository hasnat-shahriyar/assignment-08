import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

function App() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [markAsRead, setMarkAsRead] = useState([]);
  const [totalReadingTime, setTotalReadingTime] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const addToBookmark = (blog) => {
    const existingBlog = bookmarkedBlogs.find((i) => i.id == blog.id);
    if (!existingBlog?.id) {
      setBookmarkedBlogs([...bookmarkedBlogs, blog]);
    } else {
      setBookmarkedBlogs((state) => state.filter((i) => i.id !== blog.id));
    }
  };

  const handleMarkAsRead = (selectedBlog) => {
    const existingBlog = markAsRead.find((i) => i.id == selectedBlog.id);
    if (!existingBlog?.id) {
      setMarkAsRead([...markAsRead, selectedBlog]);
    }
  };

  return (
    <>
      <Header />
      <Bookmark
        bookmarkedBlogs={bookmarkedBlogs}
        totalReadingTime={totalReadingTime}
        markAsRead={markAsRead}
      />
      <Blogs
        bookmarkedBlogs={bookmarkedBlogs}
        AddToBookmark={addToBookmark}
        handleMarkAsRead={handleMarkAsRead}
        setBlogs={setBlogs}
      />
    </>
  );
}

export default App;
