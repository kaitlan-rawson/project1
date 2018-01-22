import React , {Component} from 'react'



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
                onClick={()=>{this.props.handleSubmit(this.state.loc)}}>Submit</button>
        </div>
        )
    }
}
export default Search;