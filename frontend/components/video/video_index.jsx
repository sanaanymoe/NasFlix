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
                
                <header className="header-links">
                    <div>

                        <Link className="nas-flix-logo" to="/"><p>NasFlix</p></Link>
                        <Link className="header-link" to="">Home</Link>
                        <Link className="header-link" to="">Movies</Link>
                        <Link className="header-link" to="">TV Shows</Link>
                    </div>
                    <span>

                     <button className="red-button" id="loout-button" onClick={this.props.logout}>Log Out</button>
                    </span>
                </header>

                <ul  className="video-player">
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