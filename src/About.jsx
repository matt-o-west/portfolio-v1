import React from 'react'

const About = () => {
  return (
    <div className='grid grid-cols-2 w-full mt-0 col-auto p-20 space-x-2'>
      <div>
        <h1 className='font-600 text-6xl mb-4'>
          hey, i'm{' '}
          <span className='underline decoration-teal-400 decoration-8 hover:scale-125'>
            matt
          </span>
        </h1>
        <p>based in the US, i'm a frontend developer building web apps</p>
        <button className='underline decoration-teal-400 decoration-2 my-8 hover:scale-110 hover:transition-all hover:ease-in-out hover:text-teal-400 hover:bg-blend-darken hover:bg-black px-2 rounded-sm'>
          CONTACT ME
        </button>
      </div>
      <div className='w-1/3 px-6 absolute right-8 top-0 z-0 object-cover md:object-scale-down'>
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
