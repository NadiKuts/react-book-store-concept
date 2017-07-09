import React from 'react';
import '../main.css';
import Book from './Book';

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