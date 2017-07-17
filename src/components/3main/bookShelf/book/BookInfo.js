import React from 'react';
import './bookStyle.css';

var BookInfo = React.createClass({
  render: function() {
    return (
      <div className='BookInfo'>
        {this.props.name}
      </div>
    );
  }
});

export default BookInfo;