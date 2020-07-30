import { connect } from 'react-redux'
import VideoItemDetails from './video_item_details'

import { fetchVideoDetails } from '../../actions/video_actions'
import { addToList, deleteFromList } from '../../actions/list';


const mSTP = (state, ownProps) => {
    // debugger
    return {
        video: state.entities.videos[ownProps.videoId],
        list: state.entities.list,
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchVideoDetails: (videoId) => dispatch(fetchVideoDetails(videoId)),
        addToList: (video, currentUser) => dispatch(addToList(video, currentUser)),
        deleteFromList: (videoId, currentUser) => dispatch(deleteFromList(videoId, currentUser))
    }
}


export default connect(mSTP, mDTP)(VideoItemDetails)