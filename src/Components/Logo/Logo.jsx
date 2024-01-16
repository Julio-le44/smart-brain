import React from 'react';
import './logo.css';
import Tilt from 'react-parallax-tilt';
import Brain from '../../Photos/brain_7266152.png';

const Logo = () => {
  return (
    <div className='App__Logo'>
        <Tilt tiltMaxAngleX={50} tiltMaxAngleY={50}>
            <div className='App__Logo-box'>
                <img src={Brain} alt='Brain'/>
            </div>
        </Tilt>
    </div> 
  )
}

export default Logo

