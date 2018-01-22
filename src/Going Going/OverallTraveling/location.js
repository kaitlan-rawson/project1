import React, { Component } from 'react';
import Notes from './notes'
import Traveling from './traveling'


class LocationRender extends Component {
   constructor(props){
       super(props);

       this.state = {

       }
   }


    render (){
        console.log(this.props.picUrl)
        return(
            <div className="location-render"> 
                <img className = 'PicUrl' src = {this.props.picUrl}/>
                <Notes/>
            </div>
        )
    }
}

export default LocationRender