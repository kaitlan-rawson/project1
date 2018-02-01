import React , {Component} from 'react'
import './traveled.css'
import axios from 'axios'
import Add from './addbutton'
import TravelLocationRender from './traveled.loc'


function Traveled(props){
var locations = props.filterTravel.map((val)=><div className='filterTravel' key={val.id}>
    <TravelLocationRender
    filterTravel = {val.location}
    clickDelete={props.clickDelete}
    picId = {val.id}/>
    </div>)
console.log(props)
    return(
        <div>
            <div className="traveledlocation">
                {locations}
             
            </div>
        </div>
    )
}


export default Traveled