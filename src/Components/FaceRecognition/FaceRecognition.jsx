import React from 'react';
import './facerecognition.css';

const FaceRecognition = ({imageURL, data={}}) => {
  return (
    <div className='App__FaceRecognition-container'>
      <div className='App__FaceRecognition-container2'>
        <img className='App__FaceRecognition-image' id='image'src={imageURL} alt={'img'}/>
        <div className='App__FaceRecognition-box' style={{ position: 'absolute', top: data.topRow,  bottom: data.bottomRow, right: data.rightCol, left: data.leftCol }}></div>
      </div>
    </div>
  )
}

export default FaceRecognition
