import React from 'react';
import '../main.css';
import NavigationPanel from './NavigationPanel';
import Books from './Books';
import bookInfo from '../../../books.json';

var BookShelf = React.createClass({
  getInitialState() {
    return {
      activeFilter: 'business',
      
    }
  },
  onFilterChange(filter) {
    this.setState({activeFilter: filter});
  },
  render: function() {
    let currentBooks = [];
    for (let i=0; i<bookInfo.store.length; i++) {
      if (bookInfo.store[i].category === this.state.activeFilter) {
        currentBooks = bookInfo.store[i].books;
        break;
      }
    }
    return (
      <div className='BookShelf'>
        <NavigationPanel onMainFilterClick={this.onFilterChange}></NavigationPanel>
        <Books books={currentBooks}></Books>
      </div>
    );
  }
});

export default BookShelf;