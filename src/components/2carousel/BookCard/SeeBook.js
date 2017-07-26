import React from 'react';
import '../carouselStyle.css';

var SeeBook = React.createClass({
  render: function() {
    return (
      <div className='SeeBook' style={this.props.color}>
        <button style={this.props.color}>See Book</button>
      </div>
    );
  }
});

export default SeeBook;