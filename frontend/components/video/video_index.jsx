import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

// import { FontAwesomeIcon } from '@fortawesome/react - fontawesome';
// import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";

class VideoIndex extends React.Component {


    componentDidMount(){
        this.props.fetchAllVideos()
    }

    playVideo(e) {
        e.currentTarget.play()
    }

    render () {
        const { videos } = this.props
        // const urls = [
        //     "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--aa47d0799fdfe09fde860fe37b581aac902614a1/lawsoftheuniverse.mp4",
        //     "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a89e5eacfeced1965f266be367863a5d8dc3a6a5/darkseidwar.mp4",
        //     "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--edc9c4fb160d2cfd6abd06788eee043d4096ce31/sherman.mp4",
        //     "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--329bb61c90655203c11862bec52e7719227c0100/shorts.mp4",
        //     "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f06ad4953103a5353c7fdf9c1cafcc36573d9c7b/connected.mp4"
        // ]
        // const main_video = urls[Math.floor(Math.random() * 4)]
        
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
                        <Link className="nas-flix-logo" to="/"><img src="https://fontmeme.com/permalink/200627/49ea4c9322c8aa449bd39d80af5de911.png" alt="" /></Link>
                        {/* <Link className="nas-flix-logo" to="/"><img src={require('../../../app/assets/images')}/></Link> */}
                        
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
                          <div className="video-details">
                                <h3>{mainVideo.title}</h3>
                                {/* <div className="ovelay-buttons">
                                        <button onClick={this.playVideo}><FontAwesomeIcon icon={faPlay} /> Play</button>
                                        <button onClick={this.volumeToggle}><FontAwesomeIcon icon={faVolumeMute} /></button>
                                </div> */}
                                {/* <p>Mr. Peabody and Sherman is a 2014 American computer-animated science fiction comedy film based on characters from the Peabody's Improbable History segments of the animated television series The Rocky and Bullwinkle Show, produced by DreamWorks Animation and distributed by 20th Century Fox.</p> */}
                            <p>{mainVideo.description}</p>
                          </div>
                  </div>

                </div>
                

                
                
                <div  className="grid-container">
                    
                    {
                      
                        videos.map(video => (
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