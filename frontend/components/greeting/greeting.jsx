import React from 'react';
import { Link, Redirect } from 'react-router-dom';

// import demoUser from  '../../util/demo'

class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.demoLoginHandler = this.demoLoginHandler.bind(this)
        this.sessionLinks = this.sessionLinks.bind(this)
        // this.personalGreeting = this.personalGreeting.bind(this)
    }
    
    demoLoginHandler(event){
        event.preventDefault()
        this.props.login(this.props.demoUser)
    }

    sessionLinks(){
        return (
            <div className="main-div">
                    <nav className="sub-main">
                {/* <header>
                </header> */}
                    <nav className="head-stuff">
                         <Link className="nas-flix-logo" to="/"><p>NasFlix</p></Link>
                        <Link className="login red-button" to="/login">Login</Link>
                    </nav>
                    <main className="center-stuf">
                        <p className="main-page-text">Here you can find your favorite movies and TV shows</p>
                        <button className="demo-login red-button" onClick={this.demoLoginHandler}>Demo User</button>
                        <Link className="signup red-button" to="/signup">Sign up</Link>

                    </main>
                </nav>
            </div>
        )
    }
        
    // personalGreeting(){
    //     return (
    //     <nav>
    //         <p>Signed in as: {`${this.props.currentUser.email}`}</p>
    //         <button className="red-button" onClick={this.props.logout}>Log Out</button>
    //     </nav>
    //     )
    // }
        
    render() {
        return (
            <div>
                {this.props.currentUser ? <Redirect to="/browse"/> : this.sessionLinks()}
            </div>
            
        )
    }
}


export default Greeting;