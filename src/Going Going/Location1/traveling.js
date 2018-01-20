import React , {Component} from 'react'
import App from '../../../src/App.js';
import Search from './search'
import Notes from './notes'
import './traveling.css'

class Traveling extends Component{
    constructor(props){
        super (props)

    }


render(){
    return(
        <div>
            <div className="travellocation">
                <Notes/>
                <Search/>
            </div>
        </div>
    )
}
}

export default Traveling