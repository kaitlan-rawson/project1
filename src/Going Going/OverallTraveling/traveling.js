import React , {Component} from 'react'
import Search from './search'
import LocationRender from './location'
import axios from 'axios'

class Traveling extends Component{
    constructor(props){
        super (props);
        
        this.state = {
            loc: '',
            showImage: false,
            picUrls: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(location){
        this.setState({
            loc: location
        })
        this.picResults(location)

    }


    picResults(location){
       
        var picLink = 'https://pixabay.com/api/?key=7761184-83308192faad39a7dec4bcf7a&q='+location+'&editors_choice=true';
        axios.get(picLink)
        .then(res => {
            this.sendLocations(res.data.hits[0].webformatURL)
        })
    }

    sendLocations(location){
        var locationObj = {location:location}
        axios.post('http://localhost:3001/api/travels', locationObj)
        .then(res=>{
            this.getLocations()
        })

    }

    getLocations(){
        axios.get('http://localhost:3001/api/travels')
        .then(res=>{
            this.setState({
                picUrls: res.data
            })
        })
    }

    componentDidMount(){
       this.getLocations()
    }

    handleAdd(){
        this.locations
    }

render(){
    var locations = this.state.picUrls.map((val)=><LocationRender key={val.id} picUrl ={val.location}/>)
    return(
        <div>
            <div className="travellocation">
               {locations}
                <Search handleSubmit ={this.handleSubmit}/>
            </div>
        </div>
    )
}
}

export default Traveling