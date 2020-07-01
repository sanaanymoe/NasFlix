import React from 'react'
import ReactDOM from 'react-dom'

import * as SessionAPIUtil from './util/session_api_util';
import * as VideoAPIUtils from './util/video_api_util';

import configureStore from './store/store';
import Root from './components/root'
import { login, receiveCurrentUser} from './actions/session_actions'
import { fetchVideo, fetchAllVideos, searchVideos, filterByGenre } from './actions/video_actions'


document.addEventListener("DOMContentLoaded", () => {
    <script src="https://kit.fontawesome.com/45c1b3afa1.js" crossorigin="anonymous"></script>
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    const root = document.getElementById("root");
    // const store = configureStore();
    ReactDOM.render(<Root store={ store }/>, root)

    
    
    
    
    
    
    
    //test stuff to be deleted later 
    // window.login = SessionAPIUtil.login
    window.logout = SessionAPIUtil.logout
    window.signup = SessionAPIUtil.signup
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login 
    window.currentUser = receiveCurrentUser
    window.fetchAllVideos = VideoAPIUtils.fetchAllVideos
    // window.fetchVideo = VideoAPIUtils.fetchVideo
    window.fetchVideo = fetchVideo
    window.searchVideos = searchVideos
    window.filterByGenre = filterByGenre

});