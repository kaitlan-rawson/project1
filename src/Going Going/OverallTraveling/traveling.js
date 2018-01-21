import React , {Component} from 'react'
import Search from './search'
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