import React from 'react';
import './carouselStyle.css';
import {Motion, spring} from 'react-motion';
import bookInfo from '../../books.json';
import BookCard from './BookCard/BookCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var Carousel = React.createClass({
  getCategoryBook() {
    const colors = ['background-color:#F8BBD0', 'background-color:#69F0AE', 'background-color:#E1BEE7', 'background-color:#90CAF9', 'background-color:#CCFF90']
    let carouselBooks = [];
    for (let i=0; i < bookInfo.store.length; i++) {
      carouselBooks.push(
        <div key={i} style='height:450px;'><BookCard bookInfo={bookInfo.store[i].books[0]}></BookCard></div>
      );
    };
    console.log(carouselBooks);
    return carouselBooks;
  },
  // render: function() {
  //   return (
  //     <div className='Carousel'>
  //       
  //     </div>
  //   );
  // }
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