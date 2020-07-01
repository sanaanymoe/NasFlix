import React from 'react'
import { withRouter } from 'react-router-dom'

class Genre extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     genreName: ""
        // }
        this.handleLinkClick = this.handleLinkClick.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleLinkClick(e) {
        // debugger
        e.preventDefault();
        // this.props.searchVideos(this.state.keyword)
        // this.setState({genreName: e.currentTarget.name})
        this.props.filterByGenre(e.currentTarget.name)
    }

    render() {

        return (
            <div className="dropdown-content">
                <a name="Comedy" onClick={this.handleLinkClick}>Comedy</a>
                <a name="Action" onClick={this.handleLinkClick}>Action</a>
                <a name="Crime" onClick={this.handleLinkClick}>Crime</a>
                <a name="Horror" onClick={this.handleLinkClick}>Horror</a>
            </div>
        )
    }
};


export default Genre;