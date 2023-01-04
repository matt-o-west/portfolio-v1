import React from 'react'

const Overlay = () => {
  return (
    <div className='static z-0'>
      <img
        src='/images/pattern-circle.svg'
        alt='circle'
        className='absolute top-64 w-1/8 left-2/3 -translate-x-1/2'
      />
      <img
        src='/images/pattern-rings.svg'
        alt='rings'
        className='absolute top-72 w-1/8 -translate-x-1/2 scale-110'
      />
      <img
        src='/images/pattern-rings.svg'
        alt='rings'
        className='absolute bottom-14 right-0 translate-x-60 w-1/8 scale-110'
      />
    </div>
  )
}

export default Overlay
