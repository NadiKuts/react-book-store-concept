import React from 'react';
import './bookStyle.css';
import BookCover from './BookCover';
import BookInfo from './BookInfo';
import Likes from './Likes';

var Book = React.createClass({
  render: function() {
    return (
      <div className='Book'>
        <BookCover img={this.props.img}></BookCover>
        <BookInfo name={this.props.name}></BookInfo>
        <Likes></Likes>
      </div>
    );
  }
});

export default Book;