import React , {Component} from 'react'
import App from '../../../src/App.js';
import Search from './search'
import Notes from './notes'
import LocationRender from './location'

class Traveling extends Component{
    constructor(props){
        super (props)

    }


render(){
    return(
        <div>
            <div className="travellocation">
                <LocationRender/>
                <Search/>
            </div>
        </div>
    )
}
}

export default Traveling