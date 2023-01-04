import React from 'react'

const About = () => {
  return (
    <div className='grid grid-cols-2 p-20'>
      <div>
        <h1 className='font-600 text-6xl mb-4'>
          hey, i'm{' '}
          <span className='underline decoration-teal-400 decoration-8 hover:scale-125'>
            matt
          </span>
        </h1>
        <p>based in the US, i'm a frontend developer building web apps</p>
        <button className='underline decoration-teal-400 decoration-2 my-8 py-2 hover:scale-110 hover:transition-all hover:ease-in-out hover:text-teal-400 hover:bg-blend-darken hover:bg-zinc-800 px-2 rounded-sm'>
          CONTACT ME
        </button>
      </div>
      <div>
        <img
          src='/images/image-profile-desktop.webp'
          alt='profile'
          className='w-60 top-0 right-40 absolute max-w-sm min-w-0'
        />
      </div>
    </div>
  )
}

export default About
