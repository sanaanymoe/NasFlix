import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";

class VideoIndexItem extends React.Component {

        // volumeToggle(button) {
        //         var muted = $(".video-item").prop("muted")
        //         $(".video-item").prop("muted", !muted)
        // }

        playVideo(e) {
                e.currentTarget.play()
        }

        pauseVideo(e) {
                e.currentTarget.pause()
        }
        render () {
            return (
                <div > 
                    
                  <link rel="shortcut icon" href=""/>
                  <Link className="video-title" to=""/*{`/api/videos/${this.props.video.id}`}*/>{this.props.video.title}</Link>
                  
                  
                  
                  <video 
                  className="video-item"
                  src={this.props.video.video_url} 
                  controls onMouseEnter={this.playVideo} 
                  muted={true}
                  autoPlay
                //   onClick={() => this.playVideo}
                //   controls
                //   controls onMouseLeave={this.pauseVideo}
                  />
                  {/* <div className="preview-overlay">
                          <div className="video-details">
                                <h3>{this.props.video.title}</h3>
                                <div className="ovelay-buttons">
                                        <button onClick={this.playVideo}><FontAwesomeIcon icon={faPlay} /> Play</button>
                                        <button onClick={this.volumeToggle}><FontAwesomeIcon icon={faVolumeMute} /></button>
                                </div>
                                <p>{this.props.video.description}</p>
                          </div>
                  </div> */}
                </div>
                )
        }}
export default VideoIndexItem;
