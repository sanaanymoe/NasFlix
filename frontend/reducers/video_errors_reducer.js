import {
    RECEIVE_VIDEOS,
    RECEIVE_VIDEO,
    RECEIVE_VIDEO_ERRORS
} from '../actions/video_actions';

const _nullState = [];

const videoErrorsReducer = ( state = _nullState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors 
        case RECEIVE_VIDEO:
            return _nullState;
        case RECEIVE_VIDEOS:
            _nullState
        default:
            return _nullState;
    }
}

export default videoErrorsReducer;