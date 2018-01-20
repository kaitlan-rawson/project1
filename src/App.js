import React, { Component } from 'react';
import './App.css';
import Search from './Going Going/Location/search';
import Location from './Going Going/Location/location'
import Notes from './Going Going/Location/notes'

class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      lfjd:     []
    } 
      
  }

  render() {
    return (
      <div className="App">
       
       <Location/>

      </div>
    );
  }
}

export default App;
