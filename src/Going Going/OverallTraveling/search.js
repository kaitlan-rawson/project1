import React , {Component} from 'react'
import LocationRender from './location'
import Traveling from './traveling'



class Search extends Component{
    constructor(props){
        super (props);

        this.state = {
            loc:'',

        }

    }

    
    handleChangeSearch(event){
        this.setState({loc:event.target.value})
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


                onClick={()=>{LocationRender}}>Submit</button>
        </div>
        )
    }
}
export default Search;