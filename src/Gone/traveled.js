import React , {Component} from 'react'
import './traveled.css'
import Notes from '../Going Going/OverallTraveling/notes'


class Traveled extends Component{



render(){
    return(
        <div>
            <div className="traveledlocation">
                Traveled to these locations

                <Notes/>
                {/* Need to be able to get the location I've put on my server and place it here / delete/ and add items back on to server  */}

                
            </div>
        </div>
    )
}
}

export default Traveled