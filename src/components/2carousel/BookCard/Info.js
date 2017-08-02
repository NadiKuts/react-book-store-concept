import React from 'react';
import '../carouselStyle.css';
import Rate from '../../sharedComponents/Rate';
import Description from './Description';
import SeeBook from './SeeBook';

var BookInfo = React.createClass({
  render: function() {
    const textColor = '#FFFFFF';
    return (
      <div className='Info'>
        <h1>{this.props.titel}</h1>
        <p className='Author'>by {this.props.author}</p>
        <Rate rate={this.props.rate} voters={this.props.voters} color={this.props.color} textColor={textColor}></Rate>
        <Description></Description>
        <SeeBook color={this.props.color}></SeeBook>
      </div>
    );
  }
});

export default BookInfo;