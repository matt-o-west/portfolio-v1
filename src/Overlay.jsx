import React from 'react'

const Overlay = () => {
  return (
    <div className='flex z-0'>
      <img
        src='/images/pattern-circle.svg'
        alt='circle'
        className='absolute bottom-96 right-20 w-1/8 md:right-40 lg:right-20'
      />
      <img
        src='/images/pattern-rings.svg'
        alt='rings'
        className='absolute top-72 w-1/8 -translate-x-1/2 scale-110 z-0'
      />
      <img
        src='/images/pattern-rings.svg'
        alt='rings'
        className='absolute bottom-24 right-0 translate-x-60 w-1/8 scale-110 z-0'
      />
    </div>
  )
}

export default Overlay
