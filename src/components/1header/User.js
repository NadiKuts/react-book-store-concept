import React, { Component } from 'react';
import './headerStyle.css';
import UserImg from './girl.png';

class User extends Component {
  render() {
    return (
      <div className='User'>
        <div className='UserPictire'>
          <img src={UserImg}/>
        </div>
        <div className='Notification' onClick=''>1</div>
      </div>
    );
  }
}

export default User;