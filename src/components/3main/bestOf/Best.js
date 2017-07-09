import React from 'react';
import '../main.css';
import Authors from './Authors';
import BestBooks from './BestBooks';

var Best = React.createClass({
  render: function() {
    return (
      <div className='Best'>
        <Authors></Authors>
        <BestBooks></BestBooks>
      </div>
    );
  }
});

export default Best;