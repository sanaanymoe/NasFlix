import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions';

const videoReducer = ( state = {} , action ) => {
    Object.freeze(state)
    
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_VIDEOS:
            // return Object.assign({}, state, action.videos);
            return action.videos;

        case RECEIVE_VIDEO:
            nextState[action.video.id] = action.video
            return nextState;

        default:
            return state;
    }
}

export default videoReducer;