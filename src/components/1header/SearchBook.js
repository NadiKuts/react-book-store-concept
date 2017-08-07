import React, { Component } from 'react';
import './headerStyle.css';
import {FaSearch} from 'react-icons/lib/fa';

class SearchBook extends Component {
  render() {
    return (
      <div className='SearchBook'>
        <FaSearch className='iconSearch'/>
        <input placeholder="Search Book"/>
      </div>
    );
  }
}

export default SearchBook;