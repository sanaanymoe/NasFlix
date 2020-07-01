import React from 'react'
import {withRouter} from 'react-router-dom'

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: ""
        }
        this.clickHandler=this.clickHandler.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    clickHandler(e) {
        // debugger
        e.preventDefault();
        this.props.searchVideos(this.state.keyword)
    }

    render (){

        return(
            <div>
                <form className="search-form">

                    <input 
                    className="search-box"
                        type="text" 
                        placeholder="Search.."
                        value={this.state.keyword}
                        onChange={this.update('keyword')}
                    />
                    <input 
                        className="search-button"
                        type="submit"
                        value="search"
                        onClick={this.clickHandler}
                    />
                </form>
            </div>
        )
    }
};


export default Search;