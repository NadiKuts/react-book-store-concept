import React from 'react';
import '../carouselStyle.css';

var BookCover = React.createClass({
  render: function() {
    return (
      <div className='Cover'>
        <img src={require('../../3main/bookShelf/booksImgs/' + this.props.img)} />
      </div>
    );
  }
});

export default BookCover;