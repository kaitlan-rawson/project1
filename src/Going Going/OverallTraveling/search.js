import React , {Component} from 'react'
import axios from 'axios'


class Search extends Component{
    constructor(props){
        super (props);

        this.state = {
            loc:'',
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

    handleChangeSearch(event){
        this.setState({loc:event.target.value})
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
    return (
        <div className="submitbar">
            <div>{this.state.showImage ? <img src= {this.state.picUrl} /> : null}</div>
            <input className="searchbar" 
                type="text" 
                placeholder = "Search"
                value={this.state.loc} 
                onChange={(event)=>{this.handleChangeSearch(event)}}
                onFocus={(e)=>e.target.placeholder=''}
                onBlur={(e)=>e.target.placeholder='Search'}/>
            <button className="submit" 
                type="submit" 
                // onClick={()=>} I need to be able to click this submit button and have it render all of location.js
                // need an on click that also sends the picture received and title to my server
                // <button onClick={() => this.props.functionInAnotherFile}></button>


                onClick={()=>{this.toggleShowImageAndPic()}}>Submit</button>
        </div>
        )
    }
}
export default Search;