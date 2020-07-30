import React from 'react';

// import List from '../lists/list_container'

class VideoItemDetails extends React.Component {
    constructor(props) {
        super(props)

        let buttonText = this.props.currentUser.myListVideoIds.includes(this.props.videoId) ? "add to list" : "remove from list";

        this.state = { buttonText: this.props.currentUser.myListVideoIds.includes(this.props.videoId) ? 'remove from list' : 'add to list' }

        this.handleClick = this.handleClick.bind(this)
    }
    // componentDidMount() {
    //     this.props.fetchVideoDetails(video.props.videoId)
    // }

    componentDidUpdate() {
        this.props.fetchVideoDetails(this.props.videoId)
    }
    
    handleClick() {
        // let { videoId } = this.props.video.id;
        // debugger
        if (this.props.currentUser.myListVideoIds.includes(this.props.videoId)) {
            this.props.deleteFromList(this.props.videoId, this.props.currentUser)
            this.setState({ buttonText: "add to list" })
        } else {
            this.props.addToList(this.props.video, this.props.currentUser);
            this.setState({ buttonText: "remove from list" })

        };


    }

    render() {
        if (!this.props.video){
            return null
        }
        return (
            <div  className="details">
                <h3>{this.props.video.title}</h3>
                <h4>{this.props.video.genre.name}</h4>
                <h4>{this.props.video.year}</h4>
                <p>{this.props.video.description}</p>
                {/* <List videoId={this.props.video.id} id='hide-on-render' /> */}
                <span id="list-btn" onClick={() => this.handleClick()}>{this.state.buttonText}</span>
            </div>
        )
    }
}


export default VideoItemDetails