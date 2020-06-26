import React from 'react';
import { Link } from 'react-router-dom';

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

    // renderErrors() {
    //     return (
                
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li className="errors-list">
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className="main-div">
                <header>
                    <Link className="nas-flix-logo" to="/">NasFlix</Link>
                </header>
                <div className="login-signup-form">
                    <form onSubmit={this.handleSubmit}>
                        <h1 className="form-title">{this.props.formType}</h1>
                        <br/>
                        
                        {/* {this.renderErrors()}  */}
                        <br/>
                        <label>
                            <input 
                                className="nfinput"
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                />
                        </label>
                        <br/>
                        <label>
                            <input 
                                className="nfinput"
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                />
                        </label>
                        <br/>
                        <button className="login-sign-up-buttons red-button">{this.props.formType}</button>
                        <span className="red-button options-message">
                            {/* Please {this.props.formType} or  */}
                            {this.props.alt}
                        </span>
                    </form>

                </div>
            </div>
        )
    }
};

export default SessionForm;