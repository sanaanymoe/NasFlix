import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container'
import signupFormContainer from './session/signup_form_container'
import videoIndexContainer from './video/video_index_container'
import moviesIndexContainer from './video/movies_index_container'
import showsIndexContainer from './video/shows_index_container'
import loginFormContainer from './session/login_form_container'
import Errors from '../components/errors/errors'
import searchContainer from '../components/search/search_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
    <div> {/* className="sub-main"> */}
    
        <Switch>
            <AuthRoute exact path='/login' component={loginFormContainer} />
            <AuthRoute exact path='/signup' component={signupFormContainer} />
            <ProtectedRoute path='/movies' component={moviesIndexContainer}/>
            <ProtectedRoute path='/shows' component={showsIndexContainer}/>
            <ProtectedRoute path='/home' component={videoIndexContainer}/>
            {/* <ProtectedRoute path='/search' component={searchContainer}/> */}
        </Switch>
        <Route exact path='/' component={GreetingContainer} />
        <Route exact path='/errors' component={Errors} />
        
    </div>
);

export default App;