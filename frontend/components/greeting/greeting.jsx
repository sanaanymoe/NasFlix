import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


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
                         {/* <Link className="nas-flix-logo" to="/"><p>NasFlix</p></Link> */}
                        <Link className="nas-flix-logo" to="/"><img src="https://fontmeme.com/permalink/200627/49ea4c9322c8aa449bd39d80af5de911.png" alt=""/></Link>
                        <Link className="login red-button" to="/login">Login</Link>
                    </nav>
                    <main className="center-stuf">
                        <p className="main-page-text">Your favorite movies and TV shows all in one place</p>
                        <p className="center-text">Ready for fun?Sign up or just click on Demo User below to try our site</p>
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
                {this.props.currentUser ? <Redirect to="/home"/> : this.sessionLinks()}

                


                <div className='tv'>
                    <div className='tv-text'>
                        <h2>Enjoy on your TV.</h2>
                        <br />
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>

                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                </div>


            <div className='phone'>
                <div className='phone-text'>
                    <h2> Download your shows to watch offline.</h2>
                    <p> Save your favorites easily and always have something to watch.</p>
                </div>

                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" width="400" height="400" />

            </div>

            <div className='tablet'>
                <div className='tablet-text'>
                    <h2>Watch everywhere.</h2>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                </div>

                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" width="400" height="400" />

            </div>




                <div className="footer-links">
                    <a href="https://www.linkedin.com" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/sanaanymoe" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                </div>
            </div>
           
           
            
        )

        
    }
}


export default Greeting;