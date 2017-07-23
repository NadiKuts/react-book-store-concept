import React from 'react';
import '../main.css';

var Authors = React.createClass({
  render: function() {
    let bestAuthors = [];
    for (let i=0; i<this.props.bestAuthors.length; i++) {
      bestAuthors.push(
        <li>
          <div className='AuthorPhoto'>
            <img src={require('./authors/' + i + '.png')} />
          </div>
          <span>{this.props.bestAuthors[i]}</span>
        </li>
      );
    }
    return (
      <div className='Authors'>
        <div className='Titel'>
          <span>Authors of the week</span>
        </div>
        <ul>
          {bestAuthors}
        </ul>
      </div>
    );
  }
});

export default Authors;