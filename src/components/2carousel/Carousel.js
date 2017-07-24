import React from 'react';
import './carouselStyle.css';
import {Motion, spring} from 'react-motion';
import bookInfo from '../../books.json';
import BookCard from './BookCard/BookCard';

var Carousel = React.createClass({
  getCategoryBook() {
    let carouselBooks = [];
    for (let i=0; i < bookInfo.store.length; i++) {
      carouselBooks.push(
        <BookCard key={i} bookInfo={bookInfo.store[i].books[0]}></BookCard>
      );
    };
    console.log(carouselBooks);
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