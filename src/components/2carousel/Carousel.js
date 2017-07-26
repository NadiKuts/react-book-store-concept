import React from 'react';
import './carouselStyle.css';
import bookInfo from '../../books.json';
import BookCard from './BookCard/BookCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var Carousel = React.createClass({
  getCategoryBook() {
    const backgroundColors = [
      {backgroundColor:'#F8BBD0'},
      {backgroundColor:'#B2EBF2'},
      {backgroundColor:'#E1BEE7'},
      {backgroundColor:'#90CAF9'},
      {backgroundColor:'#CCFF90'},
    ];
    const darkColors = [
      {color:'#D81B60'},
      {color:'#0097A7'},
      {color:'#8E24AA'},
      {color:'#1976D2'},
      {color:'#64DD17'},
    ];
    
    let carouselBooks = [];
    for (let i=0; i < bookInfo.store.length; i++) {
      const color = backgroundColors[i];
      const dark = darkColors[i];
      carouselBooks.push(
        <div key={i} ><BookCard bookInfo={bookInfo.store[i].books[0]} style={color} dark={dark}></BookCard></div>
      );
    };
    return carouselBooks;
  },
  
  render: function () {
    var settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '30px',
      slidesToShow: 3,
      speed: 500
      
    };
    return (
      <div className='Carousel'>
        {/* <button class='slick-arrow slick-prev'>prev</button> */}
        <Slider {...settings}>
          {this.getCategoryBook()}
        </Slider>
        {/* <button class='slick-arrow slick-next'>next</button> */}
      </div>
      
    );
  }
});

export default Carousel;