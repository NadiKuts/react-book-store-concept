import React, { Component } from 'react';
import jsonReader from 'json-loader';
import '../main.css';
import Book from './book/Book';
import bookInfo from '../../../books.json';

class Books extends Component {
  render() {
    let bookCards = [];
    for (let i=0; i<this.props.books.length; i++) {
      bookCards.push(<Book key={i} name={this.props.books[i].name} img={this.props.books[i].image} 
        author={this.props.books[i].author} rate={this.props.books[i].rate} 
        voters={this.props.books[i].voters} people={this.props.books[i].people}></Book>);
    }
    return (
      <div className='Books'>
        {bookCards}
      </div>
    );
  }
}

export default Books;