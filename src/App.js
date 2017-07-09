import React, { Component } from 'react';
import './App.css';
import Header from './components/1header/Header';
import Carousel from './components/2carousel/Carousel';
import Main from './components/3main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Carousel></Carousel>
        <Main></Main>
      </div>
    );
  }
}

export default App;
