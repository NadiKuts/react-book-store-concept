import React from 'react';
import '../main.css';
import bookInfo from '../../../books.json';

var NavBar = React.createClass({
  render: function() {
    const categories = bookInfo.store.map((x) => {
      return (
        <button className='CategoryButton'>{x.category}</button>
      )
    });
    console.log(categories);
    return (
      <div className='NavBar'>
        {categories}
      </div>
    );
  }
});

export default NavBar;