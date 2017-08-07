import React, { Component } from 'react';
import '../main.css';

class Authors extends Component{
  render() {
    let bestAuthors = [];
    for (let i=0; i<this.props.bestAuthors.length; i++) {
      bestAuthors.push(
        <li key={i}>
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
}

export default Authors;