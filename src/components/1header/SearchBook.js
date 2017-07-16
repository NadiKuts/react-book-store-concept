import React from 'react';
import './headerStyle.css';
import {FaSearch} from 'react-icons/lib/fa';

var SearchBook = React.createClass({
  render: function() {
    return (
      <div className='SearchBook'>
        <FaSearch className='iconSearch'/>
        <input placeholder="Search Book"/>
      </div>
    );
  }
});

export default SearchBook;