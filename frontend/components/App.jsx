import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Footer from './Footer/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import ReactGA from 'react-ga';


import GreetingContainer from './greeting/greeting_container'
import signupFormContainer from './session/signup_form_container'
import videoIndexContainer from './video/video_index_container'
import moviesIndexContainer from './video/movies_index_container'
import showsIndexContainer from './video/shows_index_container'
import loginFormContainer from './session/login_form_container'
import Errors from '../components/errors/errors'
import searchContainer from '../components/search/search_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import playerContainer from './video/player_container'
import MyListContainer from './lists/my_list_container';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function initializeReactGA() {
    ReactGA.initialize('G-B5TX3RLPB0');
    ReactGA.pageview('/');
}

const App = () => (
    <div> {/* className="sub-main"> */}
    
        <Switch>
            <AuthRoute exact path='/login' component={loginFormContainer} />
            <AuthRoute exact path='/signup' component={signupFormContainer} />
            <ProtectedRoute path='/movies' component={moviesIndexContainer}/>
            <ProtectedRoute path='/shows' component={showsIndexContainer}/>
            <ProtectedRoute path='/home' component={videoIndexContainer}/>
            <ProtectedRoute path="/videos/:id" component={playerContainer} />
            <ProtectedRoute path='/mylist' component={MyListContainer} />
            {/* <ProtectedRoute path='/search' component={searchContainer}/> */}
        </Switch>
        <Route exact path='/' component={GreetingContainer} />
        <Route exact path='/errors' component={Errors} />
        
    </div>
);

export default App;