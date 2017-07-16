import React from 'react';
import './headerStyle.css';
import {MdMenu} from 'react-icons/lib/md'

var Menu = React.createClass({
  render: function() {
    return (
      <div className='Menu'>
        <MdMenu className='iconMenu'/>
        <span>Menu</span>
      </div>
    );
  }
});

export default Menu;