import React, { Component } from 'react';
import Add from './addbutton'
import Notes from '../Going Going/OverallTraveling/notes'
import Delete from './delete'


class TravelLocationRender extends Component {

     render (){
            console.log(this.props.filterTravel)
         return(
             <div className="travel-location-render"> 
                <img className = 'Picurl' src={this.props.filterTravel}/>
                <Notes/>
                <Delete clickDelete ={this.props.clickDelete} picId={this.props.picId}/>
             </div>
         )
     }
 }
 
 export default TravelLocationRender