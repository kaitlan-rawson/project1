import React , {Component} from 'react'
import './note.css'

class Notes extends Component{
    

    render(){
        return(
            <div> 
                <input className="notebox" 
                type="text" 
                placeholder ="Input"
                onFocus={(e)=>e.target.placeholder=''}
                onBlur={(e)=>e.target.placeholder='Input'}
                size="1000" />
            </div>
        )
    }
}

export default Notes