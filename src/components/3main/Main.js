import React from 'react';
import Best from './bestOf/Best';
import BookShelf from './bookShelf/BookShelf';

var Main = React.createClass({
  render: function() {
    return (
      <div className='Main'>
        <Best></Best>
        <BookShelf></BookShelf>
      </div>
    );
  }
});

export default Main;