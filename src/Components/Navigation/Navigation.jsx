import React from 'react'
import './navigation.css';

const Navigation = ({onRouteChange, isSignedIn, route}) => {
  
 return <nav className='App__Navigation'>
  {isSignedIn ? 
      <>
        {route === 'delete' ?
          <p className='App__Navigation-sign' onClick={() => {onRouteChange('home')}}>{`<=back`}</p>:
          <p className='App__Navigation-sign' onClick={() => {onRouteChange('delete')}}> Delete account</p> 
        }
        <p className='App__Navigation-sign' onClick={() => {onRouteChange('signin')}}> Sign Out</p>
      </>:
      <>
        <p className='App__Navigation-sign' onClick={() => {onRouteChange('signin')}}> Sign In</p>
        <p className='App__Navigation-sign' onClick={() => {onRouteChange('register')}}> Register</p>
      </>  
  }     
  </nav>
}

export default Navigation;


/* if(isSignedIn) {
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
        <p className='App__Navigation-sign' onClick={() => {onRouteChange('delete')}}> Delete account</p>
      </nav>
    )
 } */