import React from 'react';
import jsonReader from 'json-loader';
import '../main.css';
import Book from './book/Book';
import bookInfo from '../../../books.json';

var Books = React.createClass({
  
  render: function() {
    let bookCards = [];
    for (let i=0; i<this.props.books.length; i++) {
      bookCards.push(<Book name={this.props.books[i].name} img={this.props.books[i].image}></Book>);
    }
    return (
      <div className='Books'>
        {bookCards}
      </div>
    );
  }
});

export default Books;