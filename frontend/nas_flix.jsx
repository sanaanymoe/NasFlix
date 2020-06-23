import React from 'react'
import ReactDOM from 'react-dom'
import * as SessionAPIUtil from './util/session_api_util' 

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    ReactDOM.render(<h1>Welcome To NasFlix!!</h1>, root)

    //test stuff 
    window.login = SessionAPIUtil.login
    window.logout = SessionAPIUtil.logout
    window.signup = SessionAPIUtil.signup
});