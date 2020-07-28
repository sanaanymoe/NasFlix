import React from 'react'
import { withRouter } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class Player extends React.Component {


    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.id);
    }

    render (){
        const { video } = this.props;
        if (!video) return <div></div>;
        //debugger
        return (
            <div className="video-player">
                <video 
                    className="video" 
                    src={video.video_url} 
                    controls autoPlay
                />
                <div className="back-button" id="hideMe" onClick={this.props.history.goBack}>
                    <FontAwesomeIcon icon={faArrowLeft} /><p>Back</p>
                </div>
            </div>
        )
    }
}

export default withRouter(Player);
