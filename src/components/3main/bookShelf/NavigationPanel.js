import React from 'react';
import '../main.css';
import PopularBy from './PopularBy';
import NavBar from './NavBar';

var NavigationPanel = React.createClass({
  onCategorySelect(filter) {
    this.props.onMainFilterClick(filter);
  },
  render: function() {
    return (
      <div className='NavigationPanel'>
        <PopularBy></PopularBy>
        <NavBar onFilterClick={this.onCategorySelect} activeTab={this.props.activeTab}></NavBar>
      </div>
    );
  }
});

export default NavigationPanel;