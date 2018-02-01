import React, { Component } from 'react';
import './App.css';
import Traveling from './Going Going/OverallTraveling/traveling';
import Traveled from './Gone/traveled'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      picUrls: [],
      traveled: [],
      loc: '',
      
    } 
      this.getLocations = this.getLocations.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.clickUpdate = this.clickUpdate.bind(this)
      this.clickDelete = this.clickDelete.bind(this)
  }

  handleSubmit(location){
    console.log(location)
    this.setState({
        loc: location
    })
    this.picResults(location)

}


picResults(location){
   
    var picLink = 'https://pixabay.com/api/?key=7761184-83308192faad39a7dec4bcf7a&q='+location+'&editors_choice=true';
    axios.get(picLink)
    .then(res => {
        this.sendLocations(res.data.hits[0].webformatURL)
    })
}

sendLocations(location){
    var locationObj = {location:location}
    axios.post('http://localhost:3001/api/travels', locationObj)
    .then(res=>{
        this.getLocations()
    })

}

getLocations(){
    axios.get('http://localhost:3001/api/travels')
    .then(res=>{
      console.log('LOOK HERE', res.data)
      var traveled = res.data.filter((val)=>val.traveled)
      var notTraveled = res.data.filter((val)=>!val.traveled)
       console.log(traveled,notTraveled)
        this.setState({
            picUrls: notTraveled,
            traveled: traveled
        })
    })
}

componentDidMount(){
  this.getLocations()
}

clickUpdate(id){
  console.log('click', id)
  axios.put('http://localhost:3001/api/travels/'+id)
  .then(res=>{
    console.log(res.data)
    this.getLocations()
  })
}

clickDelete(id){
  axios.delete('http://localhost:3001/api/travels/'+id)
  .then(res=>{
    this.getLocations()
  })
}

  render() {
console.log(this.state.traveled)
    return (
      <div className="App">
        <div className="travel box1">
       <Traveling handleSubmit={this.handleSubmit} picUrls={this.state.picUrls} clickUpdate={this.clickUpdate}/>       
       </div>
       <div className="travel box2">
       <Traveled filterTravel ={this.state.traveled} clickDelete={this.clickDelete}/>
       </div>
      </div>
    );
  }
}

export default App;
