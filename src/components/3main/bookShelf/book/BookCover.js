import React from 'react';
import './bookStyle.css';

var BookCover = React.createClass({
  render: function() {
    return (
      <div className='BookCover'>
        <img src={require('../booksImgs/'+this.props.img)} />
      </div>
    );
  }
});

export default BookCover;