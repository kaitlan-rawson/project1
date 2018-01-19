import React, { Component } from 'react';
import './App.css';
import Search from './Going Going/Location/search';

class App extends Component {
  constructor(props){
    super(props)

    this.state = []
      
  }

  render() {
    return (
      <div className="App">
       
       <Search/>

      </div>
    );
  }
}

export default App;
