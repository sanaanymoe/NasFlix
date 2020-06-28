import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


import { fetchAllVideos } from '../../actions/video_actions'
import { selectVideosByType } from '../../util/selectors'
import ShowsIndex from './shows_index'




const mSTP = (state) => ({
    shows: Object.values(state.entities.videos)
        .filter(show => show.video_type === "show")
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
});

export default connect(mSTP, mDTP)(ShowsIndex);