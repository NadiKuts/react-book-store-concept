import React from 'react';
import jsonReader from 'json-loader';
import '../main.css';
import Book from './book/Book';
import bookInfo from '../../../books.json';

var Books = React.createClass({
  
  render: function() {
    let bookCards = [];
    for (let i=0; i<this.props.books.length; i++) {
      bookCards.push(<Book name={this.props.books[i].name} img={this.props.books[i].image} 
        author={this.props.books[i].author} rate={this.props.books[i].rate} voters={this.props.books[i].voters}></Book>);
    }
    return (
      <div className='Books'>
        {bookCards}
      </div>
    );
  }
});

export default Books;