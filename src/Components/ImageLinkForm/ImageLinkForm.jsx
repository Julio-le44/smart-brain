import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
  return (
    <div className='App__ImageLinkForm'>
      <p className='App__ImageLinkForm-header'>
        This Magic Brain will detect faces in your pictures. Give it a try!
      </p>
      <div className='App__ImageLinkForm-container'> 
        <div className='App__ImageLinkForm-content'>  
          <input type='text' onChange={onInputChange} className='App__ImageLinkForm-content-input' />
          <button className='App__ImageLinkForm-content-button'
            onClick={onSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
