import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


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

        <div className="footer-links">
            <a href="https://www.linkedin.com/in/mohamed-sanaany-52112b1b2/" target="_blank">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a href="https://github.com/sanaanymoe" target="_blank">
                <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
        </div>
        
    </div>
);


export default App;