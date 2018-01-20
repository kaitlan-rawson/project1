import React , {Component} from 'react'
import './note.css'

class Notes extends Component{
    

    render(){
        return(
            <div> 
                <textarea className="notebox"/>
            </div>
        )
    }
}

export default Notes