import React from 'react';
import '../carouselStyle.css';
import Rate from '../../sharedComponents/Rate';
import BookDescription from './BookDescription';
import SeeBook from './SeeBook';

var BookInfo = React.createClass({
  render: function() {
    
    
    return (
      <div className='Info'>
        <h1>{this.props.titel}</h1>
        <p className='Author'>by {this.props.author}</p>
        <Rate rate={this.props.rate} voters={this.props.voters} color={this.props.color}></Rate>
        <BookDescription></BookDescription>
        <SeeBook color={this.props.color}></SeeBook>
      </div>
    );
  }
});

export default BookInfo;