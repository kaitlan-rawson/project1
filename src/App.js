import React, { Component } from 'react';
import './App.css';
import Search from './Going Going/Location/search';
import Traveling from './Going Going/Location1/traveling';
import Notes from './Going Going/Location1/notes'
import Traveled from './Gone/traveled'

class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      lfjd:[]
    } 
      
  }

  render() {
    return (
      <div className="App">
       
       <Traveling/>
       <Traveled/>
      </div>
    );
  }
}

export default App;
