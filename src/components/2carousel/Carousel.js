import React, { Component } from 'react';
import './carouselStyle.css';
import bookInfo from '../../books.json';
import BookCard from './BookCard/BookCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
  getCategoryBook = () => {
    const backgroundColors = [
      {backgroundColor:'#EC407A'}, 
      {backgroundColor:'#039BE5'}, 
      {backgroundColor:'#AB47BC'}, 
      {backgroundColor:'#FF5252'}, 
      {backgroundColor:'#00E676'}, 
    ]; 
    const darkColors = [ 
      {color:'#AD1457'}, 
      {color:'#01579B'}, 
      {color:'#6A1B9A'}, 
      {color:'#D50000'}, 
      {color:'#00C853'}, 
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
  }
  
  render() {
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
}

export default Carousel;