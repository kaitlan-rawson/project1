import React , {Component} from 'react'
import App from '../../../src/App.js';
import Search from './search'
import Notes from './notes'


class Location extends Component{
    constructor(props){
        super (props)

    }


render(){
    return(
        <div>
            <div className="Locations">
                <Notes/>
                <Search/>
            </div>
        </div>
    )
}
}

export default Location