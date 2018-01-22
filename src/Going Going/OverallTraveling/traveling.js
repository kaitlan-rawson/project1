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
            picUrl: ''
        }

    }
    picResults(){
        var picLink = 'https://pixabay.com/api/?key=7761184-83308192faad39a7dec4bcf7a&q='+this.state.loc+'&editors_choice=true';
        axios.get(picLink)
        .then(res => {
            console.log(res.data.hits[0].webformatURL)
            this.setState({picUrl:res.data.hits[0].webformatURL})
            
        })
        return picLink
    }

    toggleShowImageAndPic(){
        this.picResults()
        this.toggleShowImage()
    }

    toggleShowImage() {
        this.setState(function(prevState, props){
            return {showImage : !prevState.showImage}
        });
    }


render(){
    return(
        <div>
            <div className="travellocation">
                <LocationRender picUrl ={this.state.picUrl}/>
                <Search/>
            </div>
        </div>
    )
}
}

export default Traveling