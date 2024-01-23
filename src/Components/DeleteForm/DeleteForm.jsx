import React, {Component} from 'react';
import './deleteform.css';

class DeleteForm extends Component {
    constructor (props) {
      super(props) 
      this.state = {
        email: '',
        password: '',
        varifiedPassword: ''
      }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onVarifyChange = (event) => {
        this.setState({varifiedPassword: event.target.value})
    }

    onSubmit = () => {
        if(this.state.password === this.state.varifiedPassword) {
            fetch('https://juliole-44-smart-brain-server.onrender.com/delete', {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(() => {this.props.onRouteChange('signin')})
            .catch(err => console.log('unable to delete this account'))
        } else {
            alert('wrong credentials')
        }
    }

    render () {
        return (
            <div className='App__SignIn-container'>
                <main className="black-80 wrapper">
                    <div className="measure center">
                        <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Delete Account</legend>
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
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" >re-enter Password</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="varify-password"
                            onChange ={this.onVarifyChange}
                            />
                        </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" onClick={this.onSubmit}/>
                        </div>
                    </div>    
                </main>
            </div>
        )
    }
} 

export default DeleteForm
