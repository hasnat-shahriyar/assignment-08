import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bookmark-container'>
            <h3>{title}</h3>
        </div>
    );
};

export default Bookmark;