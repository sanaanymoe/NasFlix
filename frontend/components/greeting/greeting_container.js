import { connect } from 'react-redux';

import Greeting from './greeting';
import { logout, login } from '../../actions/session_actions';


const mSTP = ({ session, entities: { users } }) => ({
    
        currentUser: users[session.id],
        demoUser: {
            email: "mohamed@gmail.com",
            password: "mohamed"
        }
    
});

const mDTP = dispatch => ({
    
        logout: () => dispatch(logout()),
        login: (currentUser) => dispatch(login(currentUser))
    
});

export default connect(mSTP, mDTP)(Greeting);