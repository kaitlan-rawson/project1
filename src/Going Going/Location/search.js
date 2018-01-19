import React , {Component} from 'react'
import App from '../../../src/App.js';
import axios from 'axios'


class Search extends Component{
    constructor(props){
        super (props);

        this.state = {
            loc: 'chicago'
        }

    }

    picResults(){
        var picLink = 'https://pixabay.com/api/?key=7761184-83308192faad39a7dec4bcf7a&q='+this.state.loc+'&editors_choice=true';
        axios.get(picLink)
        .then(res => {
            console.log(res.data.hits[0].webformatURL)
            
        })
    }

    handleChangeSearch(event){
        this.setState({loc:event.target.value})
    }

render(){
    return (
        <div class="submitbar">
            <input className = "searchbar" type="text" placeholder ="Search" onChange = {(event)=>{this.handleChangeSearch(event)}}></input> 
            <button className = "submit" type = "submit" onClick ={(e)=>{this.picResults()}}>Submit</button> 
        </div>
        )
    }
}
export default Search;