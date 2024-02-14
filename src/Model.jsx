import React from 'react'
import { useGlobalContext } from './Context'
import { FaTimes } from 'react-icons/fa';

function Model() {
  const {isModelOpen, closeModel} = useGlobalContext();

  return (

    <div className={isModelOpen? 'modal-overlay show-modal' : 'modal-overlay' }>
      <div className='modal-container'>
        <h3>Model Content</h3>
        <button className='close-modal-btn' onClick={closeModel}><FaTimes /></button>
      </div>
    </div>
  )
}

export default Model