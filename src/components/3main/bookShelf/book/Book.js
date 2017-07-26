import React from 'react';
import './bookStyle.css';
import BookCover from './BookCover';
import BookInfo from './BookInfo';
import Likes from './Likes';
import {FaHeartO, FaHeart} from 'react-icons/lib/fa';

var Book = React.createClass({
  getInitialState: function() {
		return {
			liked: false,
		}
	},
  isLiked: function(){
		this.setState({liked: !this.state.liked});
	},

  render: function() {
    let like = null;
    if (this.state.liked) {
      like = <FaHeart className='icon' onClick={()=>{this.isLiked()}}></FaHeart>
    } else {
      like = <FaHeartO className='icon' onClick={()=>{this.isLiked()}}></FaHeartO>
    }
    return (
      <div className='Book'>
        <BookCover img={this.props.img}></BookCover>
        <BookInfo name={this.props.name} author={this.props.author}
        rate={this.props.rate} voters={this.props.voters}></BookInfo>
        {like}
        <Likes people={this.props.people}></Likes>
      </div>
    );
  }
});

export default Book;