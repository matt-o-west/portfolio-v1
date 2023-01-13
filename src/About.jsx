import React from 'react'
import { useRef } from 'react'

const About = ({ handleClick }) => {
  const ref = useRef(null)

  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-x-2 p-10 pt-20 md:m-0'>
      <div className='z-40 '>
        <h1 className='font-600 text-6xl mb-4 sm:text-8xl'>
          hey, i'm{' '}
          <span className='underline decoration-teal-400 decoration-8 hover:scale-125'>
            matt
          </span>
        </h1>
        <p className='max-[360px]:m-0 text-2xl'>
          based in the US, i'm a frontend developer building web apps. <br></br>
          want to work together?
        </p>
        <button
          onClick={handleClick}
          className='underline text-2xl decoration-teal-400 decoration-2 my-8 py-2 hover:scale-110 hover:transition-all hover:ease-in-out hover:text-teal-400 hover:bg-blend-darken hover:bg-zinc-800 px-2 rounded-md'
        >
          CONTACT ME
        </button>
      </div>
      <div>
        <img
          src='/images/image-profile-desktop.webp'
          alt='profile'
          className='w-60 top-0 lg:right-16 lg:absolute lg:w-96 max-[480px]:hidden min-w-0 md:w-72 md:ml-32 z-index-0 xs:transform xs:scale-75 xs:translate-x-10 xs:translate-y-10 xs:z-0'
        />
      </div>
    </div>
  )
}

export default About
