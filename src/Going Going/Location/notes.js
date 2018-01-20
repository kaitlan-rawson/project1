import React , {Component} from 'react'

class Notes extends Component{
    

    render(){
        return(
            <div> 
                <input className="notebox" 
                type="text" 
                placeholder ="Input"
                onFocus={(e)=>e.target.placeholder=''}
                onBlur={(e)=>e.target.placeholder='Input'}></input>
            </div>
        )
    }
}

export default Notes