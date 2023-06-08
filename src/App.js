import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
// import NewsItem from './components/NewsItem';

export default class App extends Component {
  // c="john"
  render() {
    return (
      <div>
        {/* Hello This is {this.c} and learning class based components.. */}
        <NavBar/>
        <News/>
      </div>
    )
  }
}
