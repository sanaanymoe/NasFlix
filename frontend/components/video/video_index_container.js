import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


import { fetchAllVideos, fetchVideoDetails } from '../../actions/video_actions'
import VideoIndex from './video_index';




const mSTP = (state) => ({
    videos: Object.values(state.entities.videos),
    // genres: Object.values(state.entities.genres)
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos())
});

export default connect(mSTP, mDTP)(VideoIndex);