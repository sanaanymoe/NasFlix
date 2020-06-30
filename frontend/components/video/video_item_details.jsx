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
                <p>{this.props.video.description}</p>
                <h4>{this.props.video.year}</h4>
            </div>
        )
    }
}


export default VideoItemDetails