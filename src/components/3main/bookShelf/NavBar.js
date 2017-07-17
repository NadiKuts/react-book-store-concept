import React from 'react';
import '../main.css';
import bookInfo from '../../../books.json';

var NavBar = React.createClass({
  onFilterSelect(category) {
    this.props.onFilterClick(category);
  },
  render: function() {
    const categories = bookInfo.store.map((x) => {
      return (
        <button onClick={() => this.onFilterSelect(x.category)} className='CategoryButton'>{x.category}</button>
      )
    });
    return (
      <div className='NavBar'>
        {categories}
      </div>
    );
  }
});

export default NavBar;