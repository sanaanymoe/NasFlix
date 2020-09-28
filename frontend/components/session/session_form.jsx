import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../Footer/Footer'

class SessionForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.renderErrors = this.renderErrors.bind(this)    
    }

    componentWillUnmount(){
        this.props.removeErrors()
    }

    update(field){
        return event => this.setState({
            [field]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.handleForm(user)
    }

    renderErrors() {
        if (this.props.errors)
        // debugger
        {return (
                
            <ul className="errors-ul">
                {this.props.errors.map((error, i) => (
                    <li className="errors-list" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );}else{
            return [];
        }
    }

    render() {
        // debugger
        return (
            <div className="main-div">
                <div className="sub-main">

                    <header className="head-stuff">
                        <Link className="nas-flix-logo" to="/"><img src={window.logoURL} alt="" /></Link>
                    </header>
                    <div className="login-signup-form">
                        <form onSubmit={this.handleSubmit}>
                            <h1 className="form-title">{this.props.formType}</h1>
                            <br/>
                            <br/>
                            <label>
                                <input 
                                    className="nfinput"
                                    type="text"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    />
                            </label>
                            <br/>
                            <label>
                                <input 
                                    className="nfinput"
                                    type="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    />
                            </label>
                            <br/>
                            <button className="login-sign-up-buttons red-button">{this.props.formType}</button>
                            <span className="red-button options-message">
                                {this.props.alt}
                            </span>

                            {this.renderErrors()} 
                        </form>

                    </div>
                </div>

                <Footer />
                
            </div>
        )
    }
};

export default SessionForm;