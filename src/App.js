import React, { Component } from 'react';
import './App.css';
import Search from './Going Going/Location1/search';
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
        <div className="travel box1">
       <Traveling/>
       </div>
       <div className="travl box2">
       <Traveled/>
       </div>
      </div>
    );
  }
}

export default App;
