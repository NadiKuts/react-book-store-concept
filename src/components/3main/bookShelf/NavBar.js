import React, { Component } from 'react';
import '../main.css';
import bookInfo from '../../../books.json';

class NavBar extends Component {
  onFilterSelect = (category) => {
    this.props.onFilterClick(category);
  }
  render() {
    const categories = bookInfo.store.map((x, index) => {
      let categoryName = x.category.charAt(0).toUpperCase() + x.category.slice(1);
      let style = 'CategoryButton ' + (this.props.activeTab == x.category ? 'CategoryButtonActive' : '');
      return (
        <button key={index} onClick={() => this.onFilterSelect(x.category)} className={style}>{categoryName}</button>
      )
    });
    return (
      <div className='NavBar'>
        {categories}
      </div>
    );
  }
}

export default NavBar;