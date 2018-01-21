import React, { Component } from 'react';
import Notes from './notes'


class LocationRender extends Component {
    constructor(props){
        super(props);

        this.state ={
            location: ''
        }
    }

    // renderLocationName(){
    //     this.setState({location: })
    //     function allows for whatever we type in to search and submit will show up in a title
    // }

    render (){
        return(
            <div class="location-render"> 
                
                <Notes/>
            </div>
        )
    }
}

export default LocationRender