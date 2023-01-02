import React from 'react'

const Overlay = () => {
  return (
    <div>
      <div className='bg-white opacity-50 h-screen w-screen fixed z-50'>
        <img src='/images/pattern-circle.svg' alt='circle' className='w-full' />
      </div>
    </div>
  )
}

export default Overlay
