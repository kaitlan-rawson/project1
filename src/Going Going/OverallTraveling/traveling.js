import React , {Component} from 'react'
import Search from './search'
import LocationRender from './location'
import axios from 'axios'
import Add from '../../Gone/addbutton'

class Traveling extends Component{
    constructor(props){
        super (props);
        
    }


    handleAdd(){
        
    }

render(){
    var locations = this.props.picUrls.map((val)=> <div key= {'thisisdumb'+val.id}>
        <LocationRender key={'location' + val.id} 
        picUrl ={val.location}/>
        <Add key={'add' + val.id} id = {val.id} clickUpdate={this.props.clickUpdate}/>
        </div>)
    return(
        <div>
            <div className="travellocation">
               {locations}
                <Search handleSubmit ={this.props.handleSubmit}/>
            </div>
        </div>
    )
}
}

export default Traveling