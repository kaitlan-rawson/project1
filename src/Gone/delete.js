import React, { Component } from 'react'

class Delete extends Component {

    render(){
        return(
            <div>
                <button className='Delete'
                type = 'submit'
                onClick={()=>this.props.clickDelete(this.props.picId)}
                > Delete! 
                </button>
            </div>
        )
    }
}

export default Delete