import React from 'react';
import { Link } from 'react-router-dom';


class VideoIndexItem extends React.Component {

        playVideo(e) {
                e.currentTarget.play()
        }

        pauseVideo(e) {
                e.currentTarget.pause()
        }
        render () {
            return (
                <div>
                  <link rel="shortcut icon" href=""/>
                  <Link to={`/api/videos/${this.props.video.id}`}>{this.props.video.title}</Link>
                  
                  <video 
                  className="video-item"
                  src={this.props.video.video_url} 
                  controls onMouseEnter={this.playVideo} 
                  muted={true}
                  controls onMouseLeave={this.pauseVideo}
                  />
                </div>
                )
        }}
export default VideoIndexItem;
