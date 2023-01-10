import React from 'react'

const Overlay = () => {
  return (
    <div className='flex'>
      <img
        src='/images/pattern-circle.svg'
        alt='rings'
        className='absolute bottom-96 right-72 w-1/8'
      />
      <img
        src='/images/pattern-rings.svg'
        alt='rings'
        className='absolute top-72 w-1/8 -translate-x-1/2 scale-110'
      />
      <img
        src='/images/pattern-rings.svg'
        alt='rings'
        className='absolute bottom-24 right-0 translate-x-60 w-1/8 scale-110'
      />
    </div>
  )
}

export default Overlay
