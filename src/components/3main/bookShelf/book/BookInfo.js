import React, { Component } from 'react';
import './bookStyle.css';
import Rate from '../../../sharedComponents/Rate';
import BookDescription from './BookDescription';

class BookInfo extends Component{
  render() {
    const textColor = '#607D8B';
    return (
      <div className='BookInfo'>
        <h1>{this.props.name}</h1>
        <p className='Author'>by {this.props.author}</p>
        <Rate rate={this.props.rate} voters={this.props.voters} textColor={textColor}></Rate>
        <BookDescription></BookDescription>
      </div>
    );
  }
}

export default BookInfo;