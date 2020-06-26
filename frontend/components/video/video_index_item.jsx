import React from 'react';
import { Link } from 'react-router-dom';


class VideoIndexItem extends React.Component {

        playVideo(e) {
                e.currentTarget.play()
        }
        render () {
            return (
                <div>
                            <link rel="shortcut icon" href=""/>
                  <Link to={`/api/videos/${this.props.video.id}`}>{this.props.video.title}</Link>
                  <video 
                  className="vide-player"
                  src={this.props.video.video_url} 
                  controls onMouseEnter={this.playVideo} 
                  muted={true}
                  />
                </div>
                )
        }
        }
export default VideoIndexItem;
