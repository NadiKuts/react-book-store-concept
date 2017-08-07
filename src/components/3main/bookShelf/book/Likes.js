import React, { Component } from 'react';
import './bookStyle.css';

class Likes extends Component {
  
  render() {
    let people = this.props.people;
    let photos = [];
    let likesText = null;
    for (let i=0; i < people.length; i++) {
      photos.push(
        <div key={i} className='PeopleLike'>
          <img src={require('../people/' + people[i] + '.png')} />
        </div>
      );
    }
    if (people.length != 0) {
      let name1Friend = (
        <b>{(people[0].split(' ')[0])}</b>
      );
      let name2Friend = null;
      let numPeople = people.length - 1;
      if (people.length > 2) {
        likesText = (
            <span>{name1Friend} and {numPeople} other friends like this</span>
        )
      } else if (people.length == 2) {
        name2Friend = (
          <b>{people[1].split(' ')[0]}</b>
        );
        likesText = (
            <span>{name1Friend} and {name2Friend} like this</span>
        )
      } else {
        likesText = (
            <span>{name1Friend} likes this</span>
        )
      }
    }

    return (
      <div className='Likes'>
        {photos}
        {likesText}
      </div>
    );
  }
}

export default Likes;