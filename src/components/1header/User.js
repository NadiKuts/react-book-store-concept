import React from 'react';
import './headerStyle.css';
import UserImg from './girl.png';

var User = React.createClass({
  showNotification() {
    
  },
  render: function() {
    return (
      <div className='User'>
        <div className='UserPictire'>
          <img src={UserImg}/>
        </div>
        <div className='Notification' onClick=''>1</div>
      </div>
    );
  }
});

export default User;