import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className='grid grid-cols-2 w-full'>
        <h1 className='col-span-1 font-600 text-5xl pt-20 pl-20'>Projects</h1>
        <button className='underline justify-self-end py-2 col-span-1 mt-24 mr-10 w-1/5 decoration-teal-400 decoration-2 hover:scale-110 hover:transition-all hover:ease-in-out hover:text-teal-400 hover:bg-blend-darken hover:bg-zinc-800 px-2 rounded-sm'>
          CONTACT ME
        </button>
      </div>
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
