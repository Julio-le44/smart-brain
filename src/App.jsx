import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import ParticlesBackground from './Components/ParticlesBackground/ParticlesBackground';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import DeleteForm from './Components/DeleteForm/DeleteForm';

const initialState = {
  input: '',
  imageURL: '',
  data: {}, 
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
      imageURL: '',
      data: {}, 
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (user) => {
    this.setState({user: {
      id: user.id,
      name: user.name,
      email: user.email,
      entries: user.entries,
      joined: user.joined
    }})
  }

  getInfo = () => {
    fetch('https://juliole-44-smart-brain-server.onrender.com/imageUrl', {
          method: 'post',
          headers: {'Content-Type': "application/json"},
          body: JSON.stringify({
            url: this.state.input
          })
        }
    )
    .then(response => response.json())
    .then(result => {
      console.log(result)
      if(result) {
        fetch('https://juliole-44-smart-brain-server.onrender.com/image', {
          method: 'put',
          headers: {'Content-Type': "application/json"},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(newEntires => this.setState((rest) => ({...rest,user:{...rest.user, entries: newEntires}})))
        .catch(err => console.log(err))
        this.calculateInfo(result)
      }
    })
    .catch(error => console.log('error', error));
}

  calculateInfo = (data) => {
    const box = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('image')
    const height = image.height
    const width = image.width
    this.setState({
      data: {
        bottomRow: height - (box.bottom_row * height),
        topRow: box.top_row * height,
        leftCol: box.left_col * width,
        rightCol: width - (box.right_col * width)
      }
    })
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(this.state.input)
  }

  onSubmit = () => {
    this.setState({imageURL: this.state.input, data: {}});
    this.getInfo()
  }

  onRouteChange = (change) => {
    if(change === 'home' || change === 'delete') {
      this.setState({isSignedIn: true})
    } else {
      this.setState(initialState)
    }
    this.setState({ route: change})
  }
  
  render() {
    return (
      <div className='App'>
        <ParticlesBackground />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} route={this.state.route}/>
        {this.state.route === 'signin'? 
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> :
          (this.state.route === 'register'? 
            <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/> : 
            (this.state.route === 'delete'?
              <DeleteForm onRouteChange={this.onRouteChange} name={this.state.user.name}/> :
                <>
                  <Logo /> 
                  <Rank name={this.state.user.name} entries={this.state.user.entries}/> 
                  <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                  <FaceRecognition imageURL={this.state.imageURL} data={this.state.data}/>
                </>
            )
          )
        }
      </div>
    )
  }
}

export default App;
