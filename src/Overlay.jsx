import React from 'react'

const Overlay = () => {
  return (
    <div>
      <div className='bg-black opacity-50 h-screen w-screen fixed z-10'>
        <img src='/images/pattern-circle.svg' alt='circle' className='w-full' />
      </div>
    </div>
  )
}

export default Overlay
