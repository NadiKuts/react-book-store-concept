import React from 'react';
import './bookStyle.css';
import {MdStarOutline, MdStarHalf, MdStar} from 'react-icons/lib/md'

var Rate = React.createClass({
  render: function() {
    let fullStar = parseInt(this.props.rate, 10);
    let halfStar = 0;
    let emptyStar = 0;
    if ((parseFloat(this.props.rate) - fullStar) >= 0.3 && (parseFloat(this.props.rate) - fullStar) <= 0.8) {
      halfStar = 1;
    } else if ((parseFloat(this.props.rate) - fullStar) > 0.8) {
      fullStar += 1;
    }
    emptyStar = 5 - fullStar - halfStar;
    
    let stars = [];
    
    for (let i = 0; i < fullStar; i++) {
      stars.push(<MdStar></MdStar>);
    }
    for (let i = 0; i < halfStar; i++) {
      stars.push(<MdStarHalf></MdStarHalf>);
    }
    for (let i = 0; i < emptyStar; i++) {
      stars.push(<MdStarOutline></MdStarOutline>);
    }
    
    return (
      <div className='Rate'>
        {stars}
        <span>{this.props.voters} voters</span>
      </div>
    );
  }
});

export default Rate;