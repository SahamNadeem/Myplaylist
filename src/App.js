import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultbackgroundcolor = 'white';
let defaultstyle = {
  color : defaultbackgroundcolor
};
class Aggregate extends Component{
  render(){
    return (
      <div style={{...defaultstyle,display:'inline-block', width:'40%'}}>
        <h3>Text Number</h3>
      </div>
    );
  }
}
class Filter extends Component{
  render(){
    return(
      <div style={defaultstyle}>
        <img/>
        <input type='text'/>
        Filter
      </div>
    );
  }
}
class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultstyle,width:'25%',display:'inline-block'}}>
        <img/>
        <h3>My Playlist</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate>
        </Aggregate>
        <Aggregate>
        </Aggregate>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
