import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


import { fetchAllVideos } from '../../actions/video_actions'
import {selectVideosByType} from '../../util/selectors'
import MoviesIndex from './video_index';
import VideoIndex from './video_index';




const mSTP = (state) => ({
    videos: selectVideosByType(Object.values(state.entities.videos))
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
});

export default connect(mSTP, mDTP)(VideoIndex);