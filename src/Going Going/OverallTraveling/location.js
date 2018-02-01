import React, { Component } from 'react';
import Notes from './notes'
import Add from '../../Gone/addbutton'
import './location.css'


class LocationRender extends Component {

    render (){
        console.log(this.props.id)
        return(
            <div className="location-render"> 
                <img className = 'PicUrl' src = {this.props.picUrl}/>
                <Notes/>
                <Add id = {this.props.picId} clickUpdate={this.props.clickUpdate}/>
            </div>
        )
    }
}

export default LocationRender