import React , {Component} from 'react'
import './traveled.css'
import Notes from '../Going Going/OverallTraveling/notes'


class Traveled extends Component{
    constructor(props){
        super (props)

    }


render(){
    return(
        <div>
            <div className="traveledlocation">
                Traveled to these locations

                <Notes/>
        

                
            </div>
        </div>
    )
}
}

export default Traveled