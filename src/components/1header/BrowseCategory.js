import React from 'react';
import './headerStyle.css';
import bookInfo from '../../books.json';

var BrowseCategory = React.createClass({
  render: function() {
    const categories = bookInfo.store.map((x) => {
      return (
        <option>{x.category}</option>
      )
    });
    return (
      <div className='BrowseCategory'>
        <select>
          <option value="" disabled selected>Browse Category</option>
          {categories}
        </select>
      </div>
    );
  }
});

export default BrowseCategory;