import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions'
import SessionForm from './session_form'

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        alt: <Link to='/signup'>sign up instead</Link>
    }
};

const mDTP = dispatch => {
    return {
        handleForm: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(SessionForm)