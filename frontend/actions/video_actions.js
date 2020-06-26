import * as VideoAPIUtils from '../util/video_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';

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


export const searchVideos = (keyWord) => dispatch => (
    VideoAPIUtils.searchVideos(keyWord)
        .then(videos => (dispatch(receiveVideos(videos))), error => (
            dispatch(receiveErrors(error.responseJSON))
        ))
);



