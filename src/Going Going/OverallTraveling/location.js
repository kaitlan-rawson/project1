import React, { Component } from 'react';
import Notes from './notes'
import Traveling from './traveling'


class LocationRender extends Component {
   


    render (){
        return(
            <div class="location-render"> 
                {this.props.children}
                <Notes/>
            </div>
        )
    }
}

export default LocationRender