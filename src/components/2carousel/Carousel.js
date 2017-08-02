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
      {backgroundColor:'#EC407A'}, 
      {backgroundColor:'#4DD0E1'}, 
      {backgroundColor:'#AB47BC'}, 
      {backgroundColor:'#F44336'}, 
      {backgroundColor:'#2196F3'}, 
    ]; 
    const darkColors = [ 
      {color:'#AD1457'}, 
      {color:'#00838F'}, 
      {color:'#6A1B9A'}, 
      {color:'#D50000'}, 
      {color:'#0D47A1'}, 
    ];
    
    let carouselBooks = [];
    const textColor = 'color: #FFFFFF;';
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
        <Slider {...settings}>
          {this.getCategoryBook()}
        </Slider>
      </div>
      
    );
  }
});

export default Carousel;