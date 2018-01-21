import React , {Component} from 'react'
import axios from 'axios'
import LocationRender from './location'


class Search extends Component{
    constructor(props){
        super (props);

        this.state = {
            showImage: false,
        }

    }

    picResults(){
        var picLink = 'https://pixabay.com/api/?key=7761184-83308192faad39a7dec4bcf7a&q='+this.state.loc+'&editors_choice=true';
        axios.get(picLink)
        .then(res => {
            console.log(res.data.hits[0].webformatURL)
            
        })
        return picLink
    }

    handleChangeSearch(event){
        this.setState({loc:event.target.value})
    }

    // toggleShowImage(){
    //     this.setState({showImage: !showImage
    //     })
    // }

render(){
    return (
        <div className="submitbar">
            {/* <div>{this.state.showImage ? <img src="https://www.w3schools.com/howto/img_fjords.jpg" /> : null}</div> */}
            <input className="searchbar" 
                type="text" 
                placeholder = "Search"
                value={this.state.loc} 
                onChange={(event)=>{this.handleChangeSearch(event)}}
                onFocus={(e)=>e.target.placeholder=''}
                onBlur={(e)=>e.target.placeholder='Search'}/>
            <button className="submit" 
                type="submit" 
                onClick={()=>this.toggleShowImage}
                // onClick={()=>} I need to be able to click this submit button and have it render all of location.js7
                // need an on click that also sends the picture received to my server
                onClick={()=>{this.picResults()}}>Submit</button>
        </div>
        )
    }
}
export default Search;