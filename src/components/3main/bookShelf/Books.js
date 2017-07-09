import React from 'react';
import '../main.css';
import Book from './Book';

var Books = React.createClass({
  render: function() {
    return (
      <div className='Books'>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
      </div>
    );
  }
});

export default Books;