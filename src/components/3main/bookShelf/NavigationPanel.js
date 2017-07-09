import React from 'react';
import '../main.css';
import PopularBy from './PopularBy';
import NavBar from './NavBar';

var NavigationPanel = React.createClass({
  render: function() {
    return (
      <div className='NavigationPanel'>
        <PopularBy></PopularBy>
        <NavBar></NavBar>
      </div>
    );
  }
});

export default NavigationPanel;