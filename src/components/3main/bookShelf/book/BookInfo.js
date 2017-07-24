import React from 'react';
import './bookStyle.css';
import Rate from '../../../sharedComponents/Rate';
import BookDescription from './BookDescription';

var BookInfo = React.createClass({
  render: function() {
    return (
      <div className='BookInfo'>
        <h1>{this.props.name}</h1>
        <p className='Author'>by {this.props.author}</p>
        <Rate rate={this.props.rate} voters={this.props.voters}></Rate>
        <BookDescription></BookDescription>
      </div>
    );
  }
});

export default BookInfo;