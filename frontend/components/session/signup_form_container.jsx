import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = ({ errors }) => {
    return {
        errors: errors.session ,
        formType: 'signup',
        alt: <Link to='/signup'>log in instead</Link>
    }
};

const mDTP = dispatch => {
    return {
        handleForm: (user) => dispatch(signup(user))
    }
};

export default connect(mSTP, mDTP)(SessionForm);