import React from 'react';
import './headerStyle.css';
import BrowseCategory from './BrowseCategory';
import SearchBook from './SearchBook';
import Titel from './Titel';
import User from './User';
import Menu from './Menu';

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <BrowseCategory></BrowseCategory>
        <SearchBook></SearchBook>
        <Titel></Titel>
        <User></User>
        <Menu></Menu>
      </header>
    );
  }
});

export default Header;