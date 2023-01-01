import React from 'react'

const About = () => {
  return (
    <div className='grid grid-cols-2 w-full mt-0 col-auto px-4 pt-20 space-x-2'>
      <div>
        <h1 className='font-600 text-4xl'>
          hey, i'm <span className='decoration-teal-400'>matt</span>
        </h1>
        <p>based in the us, i'm a frontend developer building web apps</p>
      </div>
      <div className='w-1/3 px-2 absolute right-8 top-0 z-0 object-cover md:object-scale-down '>
        <img
          src='/images/image-profile-desktop.webp'
          alt='profile'
          className='w-full z-auto'
        />
      </div>
    </div>
  )
}

export default About
