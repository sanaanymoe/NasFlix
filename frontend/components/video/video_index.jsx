import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {

    componentDidMount(){
        this.props.fetchAllVideos()
    }

    render () {
        const { videos } = this.props
        return (
            <div>
                <button className="red-button" onClick={this.props.logout}>Log Out</button>
                <ul>
                    {
                        videos.map(video => (
                            <VideoIndexItem 
                            video={video}
                            key={video.id}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default VideoIndex;