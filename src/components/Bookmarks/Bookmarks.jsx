import React from 'react';
import Bookmark from '../Bookmark/Bookmark.jsx';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='bookmarks-container'>
            <div className="">
                <h3>Reading Time : {readingTime}</h3>
            </div>
            <h2>Bookmarked Blogs : 
                {bookmarks.length}
                {
                    bookmarks.map((bookmark, idx) => <Bookmark 
                    key = {idx}
                    bookmark = {bookmark} />)
                }
            </h2>
        </div>
    );
};

export default Bookmarks;