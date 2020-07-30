import * as VideoAPIUtils from '../util/video_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
export const RECEIVE_VIDEO_DETAILS = "RECEIVE_VIDEO_DETAILS"

const receiveVideos = (videos) => ({
    type: RECEIVE_VIDEOS,
    videos
});

const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
});


const receiveErrors = (errors) => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
}) 

const receiveVideoDetails = (videoDetails) => {
    return {
        type: RECEIVE_VIDEO_DETAILS,
        videoDetails
    }
}


export const fetchAllVideos = () => dispatch => (
    VideoAPIUtils.fetchAllVideos()
        .then(videos => (dispatch(receiveVideos(videos))), error => (
            dispatch(receiveErrors(error.responseJSON))
        ))
);


export const fetchVideo = (videoId) => dispatch => (
    VideoAPIUtils.fetchVideo(videoId)
        .then(video => (dispatch(receiveVideo(video))), error => (
            dispatch(receiveErrors(error.responseJSON))
        ))
);

export const fetchVideoDetails = (videoId) => {
    return (dispatch) => {
        return VideoAPIUtils.fetchVideo(videoId)
            .then(videoDetails => {
                dispatch(receiveVideoDetails(videoDetails))
            })
    }
}


export const searchVideos = (keyword) => dispatch => (
    VideoAPIUtils.searchVideos(keyword)
        .then(videos => (dispatch(receiveVideos(videos))), error => (
            dispatch(receiveErrors(error.responseJSON))
        ))
);

export const filterByGenre = genreName => dispatch => (
    VideoAPIUtils.filterByGenre(genreName)
        .then( videos => (dispatch(receiveVideos(videos))), error => (
            dispatch(receiveErrors(error.responseJSON))
        ))
);



