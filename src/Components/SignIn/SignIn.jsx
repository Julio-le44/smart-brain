import React , {Component} from 'react';
import './signin.css';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    onSubmitSignIn = () => {
        fetch('https://juliole-44-smart-brain-server.onrender.com/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then((data) => {
            if (data.id) {
                this.props.loadUser(data)
                this.props.onRouteChange('home')
            } else {
                console.log(data)
            }
        })
        .catch(err => console.log('unable to signin'))
    }
    render() {
        return (
        <div className='App__SignIn-container'>
        <main className="black-80 wrapper">
            <div className="measure center">
                <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Email</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="email"
                            name="email-address"  
                            id="singin-email-address"
                            onChange={this.onEmailChange}
                         />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" >Password</label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="signin-password"
                            onChange ={this.onPasswordChange}
                        />
                    </div>
                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.onSubmitSignIn}/>
                </div>
                <div className="lh-copy mt3">
                <p onClick={() => {this.props.onRouteChange('register')}} className="f6 link dim black db">Register</p>
                </div>
            </div>
        </main>
    </div>
    )
}
}

export default SignIn
