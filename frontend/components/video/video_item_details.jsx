import React from 'react';

class VideoItemDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    // componentDidMount() {
    //     this.props.fetchVideoDetail(video.props.videoId)
    // }
    
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
            </div>
        )
    }
}


export default VideoItemDetails