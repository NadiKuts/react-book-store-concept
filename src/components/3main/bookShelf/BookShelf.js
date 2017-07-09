import React from 'react';
import '../main.css';
import NavigationPanel from './NavigationPanel';
import Books from './Books';

var BookShelf = React.createClass({
  render: function() {
    return (
      <div className='BookShelf'>
        <NavigationPanel></NavigationPanel>
        <Books></Books>
      </div>
    );
  }
});

export default BookShelf;