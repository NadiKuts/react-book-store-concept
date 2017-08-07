import React, { Component } from 'react';
import './headerStyle.css';
import {MdMenu} from 'react-icons/lib/md'

class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <MdMenu className='iconMenu'/>
        <span>Menu</span>
      </div>
    );
  }
}

export default Menu;