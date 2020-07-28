import { connect } from 'react-redux'
import Player from './Player'

import { fetchVideo } from '../../actions/video_actions'


const mSTP = (state, ownProps) => {
    // debugger
    return {
        video: state.entities.videos[ownProps.match.params.id]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
    }
}


export default connect(mSTP, mDTP)(Player)