import { connect } from 'react-redux'
import VideoItemDetails from './video_item_details'

import { fetchVideoDetails } from '../../actions/video_actions'


const mSTP = (state, ownProps) => {
    // debugger
    return {
        video: state.entities.videos[ownProps.videoId]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchVideoDetails: (videoId) => dispatch(fetchVideoDetails(videoId))
    }
}


export default connect(mSTP, mDTP)(VideoItemDetails)