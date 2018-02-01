import React , {Component} from 'react'
import Search from './search'
import LocationRender from './location'
import axios from 'axios'
import './traveling.css'

class Traveling extends Component{


render(){
    var locations = this.props.picUrls.map((val)=> <div className='unicorn' key= {'thisisdumb'+val.id}>
        <LocationRender key={'location' + val.id} 
        picUrl ={val.location}
        picId = {val.id}
        clickUpdate = {this.props.clickUpdate}/>
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