import React from 'react';
import './rank.css';
const Rank = ({name,entries}) => {
  return (
    <div className='App__Rank'>
      <div className='App__Rank-container'> 
        <h1 className='App__Rank-header'>{`${name}, Your current entry count is ...`}</h1> 
        <p className='App__Rank-number'>{`#${entries}`}</p>
      </div>
    </div>
  )
}

export default Rank
