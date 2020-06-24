import React from 'react'
import ReactDOM from 'react-dom'

import * as SessionAPIUtil from './util/session_api_util' 
import configureStore from './store/store';
import Root from './components/root'
import { login, receiveCurrentUser} from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {

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
});