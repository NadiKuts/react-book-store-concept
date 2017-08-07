import React, { Component } from 'react';
import '../main.css';

class BestBooks extends Component {
  render() {
    let bestBooks = [];
    for (let i=0; i<this.props.bestBooks.length; i++) {
      bestBooks.push(
        <li key={i}>
          <div className='BookPhoto'>
            <img src={require('../bookShelf/booksImgs/' + this.props.bestBooks[i].image)} />
          </div>
          <span>{this.props.bestBooks[i].name}</span>
        </li>
      );
    }
    return (
      <div className='BestBooks'>
        <div className='Titel'>
          <span>Books of the year</span>
        </div>
        <ul>
          {bestBooks}
        </ul>
      </div>
    );
  }
}

export default BestBooks;