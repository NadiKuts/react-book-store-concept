import React from 'react';
import './carouselStyle.css';
import {Motion, spring} from 'react-motion';
import bookInfo from '../books.json'

var Carousel = React.createClass({
  getCategoryBook() {
    let carouselBooks = [];
    for (let i=0; i < bookInfo.store.length; i++) {
      carouselBooks.push(bookInfo.store[i].books[0]);
    };
    return carouselBooks;
  },
  render: function() {
    return (
      <div className='Carousel'>
        
      </div>
    );
  }
});

export default Carousel;