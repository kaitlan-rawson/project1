import React, { Component } from 'react'


class Add extends Component {
    
    render(){
        return(
            <div>
                <button className='Add'
                type='submit'
                onClick={()=>this.props.clickUpdate(this.props.id)}
                > Traveled! 
                
                </button>
            </div>
        )
    }
}

export default Add