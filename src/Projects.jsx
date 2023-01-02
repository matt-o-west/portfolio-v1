import React from 'react'

const Projects = () => {
  return (
    <div>
      <h1 className='font-600 text-5xl pt-20 pl-20'>Projects</h1>
      <div className='grid grid-cols-3 gap-x-10 gap-y-10 pt-10 pl-20 pb-32'>
        <div className='w-full px-6 object-cover md:object-scale-down'>
          <img
            src='/images/thumbnail-project-1-large.webp'
            alt='project-one'
            className='w-full z-auto'
          />
          <p className='font-600 text-2xl'>DESIGN PORTFOLIO</p>
          <p className='font-400 text-xl'>Typescript Vite Emotion</p>
        </div>
        <div className='w-full px-6 object-cover md:object-scale-down'>
          <img
            src='/images/thumbnail-project-2-large.webp'
            alt='project-one'
            className='w-full z-auto'
          />
          <p className='font-600 text-2xl'>E-LEARNING APP</p>
          <p className='font-400 text-xl'>Typescript Astro Tailwind</p>
        </div>
        <div className='w-full px-6 object-cover md:object-scale-down'>
          <img
            src='/images/thumbnail-project-3-large.webp'
            alt='project-one'
            className='w-full z-auto'
          />
          <p className='font-600 text-2xl'>TODO APP</p>
          <p className='text-lg'>Typescript Next Sanity Tailwind</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
