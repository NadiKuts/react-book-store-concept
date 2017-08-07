import React, { Component } from 'react';
import '../main.css';
import Authors from './Authors';
import BestBooks from './BestBooks';
import bookInfo from '../../../books.json';

class Best extends Component{
  
  getBest = () => {
    let allBooks = [];
    for (let i=0; i < bookInfo.store.length; i++) {
      let books = bookInfo.store[i].books;
      for (let j=0; j < books.length; j++) {
        allBooks.push(books[j]);
      }
    };
    allBooks.sort(function(a, b) {
      return b.rate - a.rate;
    });
    return allBooks;
  }

  getBestAuthors = () => {
    const authors = this.getBest().slice(0,5).map((book) => {
      return book.author;
    });
    return authors;
  }
  
  getBestBooks = () => {
    const bestBooks = this.getBest().slice(0,5).map((book) => {
      return {
        name: book.name,
        image: book.image,
      };
    });
    return bestBooks;
  }
  render() {
    return (
      <div className='Best'>
        <Authors bestAuthors={this.getBestAuthors()}></Authors>
        <BestBooks bestBooks={this.getBestBooks()}></BestBooks>
      </div>
    );
  }
}

export default Best;