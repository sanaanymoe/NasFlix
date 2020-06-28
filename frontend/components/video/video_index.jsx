import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {

    setMainVideo(videos){
        return mainVideo = videos[0]
    }

    componentDidMount(){
        this.props.fetchAllVideos()
    }

    render () {
        const { videos } = this.props
        // const mainVideo = videos[0]
        // debugger
        return (
            
            
            <div className="home-main-div">

            
                
                <header className="header-links">
                    <div>

                        {/* <Link className="nas-flix-logo" to="/"><p>NasFlix</p></Link> */}
                        <Link className="nas-flix-logo" to="/"><img src="https://fontmeme.com/permalink/200627/49ea4c9322c8aa449bd39d80af5de911.png" alt="" /></Link>
                        <Link className="header-link" to="">Home</Link>
                        <Link className="header-link" to="/movies">Movies</Link>
                        <Link className="header-link" to="/shows">TV Shows</Link>
                    </div>
                    <span>
                     <button className="red-button" id="loout-button" onClick={this.props.logout}>Log Out</button>
                    </span>
                </header>
                
                

                    <VideoIndexItem
                        className="main-video"
                        video={videos.slice(0,1)}
                    />
                
                
                <div  className="grid-container">
                    
                    {
                        
                        videos.slice(1).map(video => (
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