import React from 'react';
import { Link } from 'react-router-dom';

import VideoItemDetailsContainer from './video_details_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class VideoIndexItem extends React.Component {

        constructor(props){
                super(props)
                this.state = {toggle: false}
                this.handleClick = this.handleClick.bind(this)
        }

        // volumeToggle(button) {
        //         var muted = $(".video-item").prop("muted")
        //         $(".video-item").prop("muted", !muted)
        // }

        handleClick(e) {
                this.state.toggle ? this.setState({ toggle: false }) : this.setState({ toggle: true })
                // e.currentTarget.play()
        }

        playVideo(e) {
                e.currentTarget.play()
        }

        pauseVideo(e) {
                e.currentTarget.pause()
        }

        render () {
                // debugger
            return (
                <div className="index-item"> 
                    
                        <link rel="shortcut icon" href=""/>
                        
                        {/* <Link className="video-title" to="">{this.props.video.title}</Link> */}
                        
                        <div className="video-and-details">
                        <Link key={this.props.video.id} className="video-link" to={`/videos/${this.props.video.id}`}>

                                <video 
                                
                                className="video-item"
                                src={this.props.video.video_url}
                                poster={this.props.video.image}
                                //   controls onMouseEnter={this.playVideo} 
                                onMouseEnter={this.playVideo} 
                                muted={true}
                                //   autoPlay
                                onClick={this.handleClick}
                                //   onClick={() => this.playVideo}
                                //   controls
                                //   controls onMouseLeave={this.pauseVideo}
                                onMouseLeave={this.pauseVideo}
                                />
                                </Link>
                                <div className="details-icon">
                                        <FontAwesomeIcon icon={faChevronDown} size="lg" onClick={this.handleClick}/>
                                </div>
                        </div>
                        {this.state.toggle ? <VideoItemDetailsContainer videoId={this.props.video.id} /> : ""}

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
