import { connect } from 'react-redux'

import {
    fetchAllVideos,
    fetchVideo,
    searchVideos
} from '../../actions/video_actions'

import Search from './search';
// debugger

const mSTP = state => {
    return {

        videos: Object.values(state.entities.videos)
    }
   
};

const mDTP = dispatch => {

    return {

        fetchAllVideos: () => dispatch(fetchAllVideos()),
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
        searchVideos: (keyword) => dispatch(searchVideos(keyword))
    }
     
    
}

export default connect(mSTP, mDTP)(Search)