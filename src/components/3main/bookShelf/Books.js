import React from 'react';
import jsonReader from 'json-loader';
import '../main.css';
import Book from './Book';
import bookInfo from '../../../books.json';

var Books = React.createClass({
  
  render: function() {
    let books = [];
    for (let i = 0; i < 9; i++) {
      books.push(<Book></Book>);
    }
    return (
      <div className='Books'>
        {books}
      </div>
    );
  }
});

export default Books;