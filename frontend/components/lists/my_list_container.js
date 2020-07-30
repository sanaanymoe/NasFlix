import { connect } from 'react-redux';
// import myList from './my_list';
import { fetchAllVideos } from '../../actions/video_actions';
import { logout } from '../../actions/session_actions'
import VideoIndex from '../video/video_index'


const mSTP = state => ({
    // videos: state.entities.videos,
    videos: Object.values(state.entities.videos),
   
    currentUser: state.entities.users[state.session.id],
    videos: Object.values(state.entities.videos)
        .filter(video => state.entities.users[state.session.id].myListVideoIds.includes(video.id))
})

const mDTP = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(VideoIndex);