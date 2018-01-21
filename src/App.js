import React, { Component } from 'react';
import './App.css';
import Traveling from './Going Going/OverallTraveling/traveling';
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
       <div className="travel box2">
       <Traveled/>
       </div>
      </div>
    );
  }
}

export default App;
