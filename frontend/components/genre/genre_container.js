import { connect } from 'react-redux'

import {
    fetchAllVideos,
    fetchVideo,
    filterByGenre
} from '../../actions/video_actions'

import Genre from './genre';
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
        filterByGenre: (genreName) => dispatch(filterByGenre(genreName))
    }


}

export default connect(mSTP, mDTP)(Genre)