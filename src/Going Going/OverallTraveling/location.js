import React, { Component } from 'react';
import Notes from './notes'
import Add from '../../Gone/addbutton'
import './location.css'


class LocationRender extends Component {
   constructor(props){
       super(props);

       this.state = {

       }
   }


    render (){

        return(
            <div className="location-render"> 
                <img className = 'PicUrl' src = {this.props.picUrl}/>
                <Notes/>
               
            </div>
        )
    }
}

export default LocationRender