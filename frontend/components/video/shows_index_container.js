import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


import { fetchAllVideos } from '../../actions/video_actions'
import { selectVideosByType } from '../../util/selectors'
import ShowsIndex from './shows_index'
import VideoIndex from './video_index';




const mSTP = (state) => ({
    videos: Object.values(state.entities.videos)
        .filter(show => show.video_type === "show")
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
});

export default connect(mSTP, mDTP)(VideoIndex);