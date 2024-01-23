import React , {Component}from 'react';
import './register.css';
import '../SignIn/signin.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    onSubmitRegister = () => {
        fetch('https://juliole-44-smart-brain-server.onrender.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then((user) => {
            if (user) {
                this.props.loadUser(user)
                this.props.onRouteChange('home')
            }
        })
        .catch(err => alert('unable to register'))
    }
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

  render(){  
    return (
        <div className='App__Register-container'>
            <main className="black-80 wrapper">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">Name</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name"
                                onChange={this.onNameChange}    
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">Email</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6">Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange}    
                            />
                        </div>
                    </fieldset>
                    <div className="lh-copy mt3">
                    <p onClick={this.onSubmitRegister} className="f6 link dim black db">Register</p>
                    </div>
                </div>
            </main>
        </div>
    )
  }
}

export default Register
