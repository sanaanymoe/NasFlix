import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

// import { FontAwesomeIcon } from '@fortawesome/react - fontawesome';
// import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";

class VideoIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            filteredVideos: this.props.videos
        }
        this.handleLinkClick = this.handleLinkClick.bind(this)
        // this.newVideos = []
    }

    componentDidMount(){
        this.props.fetchAllVideos()
    }

    playVideo(e) {
        e.currentTarget.play()
    }

    handleLinkClick(e){
        this.setState({ filteredVideos: this.props.videos.filter(video => video.genre.name === e.currentTarget.name)}) 
    //    debugger
    }

    render () {
        
        let { videos } = this.props
        const mainVideo = this.props.videos[Math.floor(Math.random() * videos.length)]
        if (!mainVideo) {
            return null
        }
        // debugger
        return (
            <div className="home-main-div">

                <header className="header-links">
                    <div>

                        {/* <Link className="nas-flix-logo" to="/"><p>NasFlix</p></Link> */}
                        <Link className="nas-flix-logo" to="/"><img src={window.logoURL} alt="" /></Link>
                        
                        <Link className="header-link" to="">Home</Link>
                        <Link className="header-link" to="/movies">Movies</Link>
                        <Link className="header-link" to="/shows">TV Shows</Link>
                    </div>
                    <span>
                        <button className="red-button" id="loout-button" onClick={this.props.logout}>Log Out</button>
                    </span>
                </header>
                
                
                <div className="preview-container">
                    {/* <VideoIndexItem
                        className="main-video"
                        video={videos.slice(0,1)}
                    /> */}

                    <video 
                        className="main-video"
                        muted={true}
                        // autoPlay
                        controls onMouseEnter={this.playVideo}
                        src={mainVideo.video_url}>

                    </video>

                    <div className="preview-overlay">
                        <div className="dropdown">
                            <button className="dropbtn">Genres</button>
                            <div className="dropdown-content">
                                <a name="Comedy" onClick={this.handleLinkClick}>Comedy</a>
                                <a name="Action" onClick={this.handleLinkClick}>Action</a>
                                <a name="Crime" onClick={this.handleLinkClick}>Crime</a>
                                <a name="Horror" onClick={this.handleLinkClick}>Horror</a>
                                            
                            </div>
                        </div>
                          <div className="video-details">
                                <h3>{mainVideo.title}</h3>
                                {/* <div className="ovelay-buttons">
                                        <button onClick={this.playVideo}><FontAwesomeIcon icon={faPlay} /> Play</button>
                                        <button onClick={this.volumeToggle}><FontAwesomeIcon icon={faVolumeMute} /></button>
                                </div> */}

                            <p>{mainVideo.description}</p>
                          </div>



                  </div>

                </div>
                

                <div  className="grid-container">
                    
                 {/* {   this.newVideos.length > 0 ? 
                        (this.newVideos.map(video => (
                          <VideoIndexItem
                              className="in-grid"
                              video={video}
                              key={video.id}
                          />
                      )))
                      :
                      (videos.map(video => (
                                <VideoIndexItem 
                                className="in-grid"
                                video={video}
                                key={video.id}
                                />
                        )))
                      

                        
                    } */
                    
                        this.state.filteredVideos.map(video => (
                            <VideoIndexItem
                                className="in-grid"
                                video={video}
                                key={video.id}
                            />
                        ))
                    
                    }
                </div>
            </div>
        )
    }
}

export default VideoIndex;