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
import loginFormContainer from './session/login_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
    <div>
        
        <Switch>
            <AuthRoute exact path='/login' component={loginFormContainer} />
            <AuthRoute exact path='/signup' component={signupFormContainer} />
        </Switch>
        <Route exact path='/' component={GreetingContainer} />
        
        
        
    </div>
);

export default App;