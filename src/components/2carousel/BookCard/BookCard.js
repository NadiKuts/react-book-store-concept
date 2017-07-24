import React from 'react';
import '../carouselStyle.css';
import Cover from './BookCover';
import Info from './BookInfo';


var BookCard = React.createClass({
  render: function() {
    return (
      <div className='BookCard'>
        <Cover img={this.props.bookInfo.image}></Cover>
        <Info titel={this.props.bookInfo.name} author={this.props.bookInfo.author} 
          rate={this.props.bookInfo.rate} voters={this.props.bookInfo.voters}></Info>
      </div>
    );
  }
});

export default BookCard;