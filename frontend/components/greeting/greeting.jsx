import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Footer from '../Footer/Footer'

class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.demoLoginHandler = this.demoLoginHandler.bind(this)
        this.sessionLinks = this.sessionLinks.bind(this)
    }
    
    demoLoginHandler(event){
        event.preventDefault()
        this.props.login(this.props.demoUser)
    }

    sessionLinks(){
        return (
            <div className="main-div">
                    <nav className="sub-main">
                    <nav className="head-stuff">
                         
                        <Link className="nas-flix-logo" to="/"><img src={window.logoURL} alt=""/></Link>
                        <Link className="login red-button" to="/login">Login</Link>
                    </nav>
                    <main className="center-stuf">
                        <p className="main-page-text">Your favorite movies and TV shows all in one place</p>
                        <p className="center-text">Ready for fun? Sign up or just click on Demo User below to try our site</p>
                        <button className="demo-login red-button" onClick={this.demoLoginHandler}>Demo User</button>
                        <Link className="signup red-button" to="/signup">Sign up</Link>

                    </main>
                </nav>
            </div>
        )
    }
        
    render() {
        return (
            <div>
                {this.props.currentUser ? <Redirect to="/home"/> : this.sessionLinks()}

                <div className='tv'>
                    <div className='tv-text'>
                        <h2>Enjoy on your TV.</h2>
                        <br />
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>

                    <img src={window.tvURL} />
                </div>


                <div className='phone'>
                    <div className='phone-text'>
                        <h2> Download your shows to watch offline.</h2>
                        <p> Save your favorites easily and always have something to watch.</p>
                    </div>

                    <img src={window.phoneURL} width="400" height="400" />

                </div>

                <div className='tablet'>
                    <div className='tablet-text'>
                        <h2>Watch everywhere.</h2>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                    </div>

                    <img src={window.tabletURL} width="400" height="400" />

                </div>

                <Footer/>
            </div>   
        )     
    }
}


export default Greeting;