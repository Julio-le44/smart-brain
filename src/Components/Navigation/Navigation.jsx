import React from 'react'
import './navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
 if(isSignedIn) {
  return(
    <nav className='App__Navigation'>
      <p className='App__Navigation-sign' onClick={() => {onRouteChange('signin')}}> Sign Out</p>
    </nav>
  )
 } else {
    return(
      <nav className='App__Navigation'>
        <p className='App__Navigation-sign' onClick={() => {onRouteChange('signin')}}> Sign In</p>
        <p className='App__Navigation-sign' onClick={() => {onRouteChange('register')}}> Register</p>
      </nav>
    )
 }
}

export default Navigation;