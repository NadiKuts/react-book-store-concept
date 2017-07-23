import React from 'react';
import '../carouselStyle.css';
import BookCover from './BookCover.js';
import BookInfo from './BookInfo.js';


var BookCard = React.createClass({
  render: function() {
    return (
      <div className='BookCard'>
        <BookCover></BookCover>
        <BookInfo></BookInfo>
      </div>
    );
  }
});

export default BookCard;