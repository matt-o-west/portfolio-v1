import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className='grid grid-cols-2 w-full'>
        <h1 className='col-span-1 font-600 text-5xl pt-20 pl-20'>Projects</h1>
        <button className='underline justify-self-end py-2 col-span-1 mt-24 mr-10 w-1/8 decoration-teal-400 decoration-2 hover:scale-110 hover:transition-all hover:ease-in-out hover:text-teal-400 hover:bg-blend-darken hover:bg-zinc-800 px-2 rounded-sm'>
          CONTACT ME
        </button>
      </div>
      <div className='grid grid-cols-3 gap-x-10 gap-y-10 pt-10 pl-20 pb-32'>
        <div className='w-full px-6 object-cover md:object-scale-down'>
          <img
            src='/images/thumbnail-project-1-large.webp'
            alt='project-one'
            className='w-full z-auto py-2'
          />
          <p className='font-600 text-2xl'>DESIGN PORTFOLIO</p>
          <p className='font-400 text-xl'>Typescript Vite Emotion</p>
        </div>
        <div class='group'>
          <div className='hidden group-hover:block absolute max-w-full opacity-20 bg-zinc-500 object-cover justify-center align-center'>
            <button className='underline py-2 col-span-1 w-1/8 decoration-teal-400 decoration-2 hover:scale-110 hover:transition-all hover:ease-in-out hover:text-teal-400 hover:bg-blend-darken hover:bg-zinc-800 px-2 rounded-sm'>
              LINK
            </button>
            <button>
              <img className='w-6' src='/images/icon-github.svg' alt='github' />
            </button>
          </div>
          <div className='w-full px-6 object-cover md:object-scale-down'>
            <img
              src='/images/thumbnail-project-2-large.webp'
              alt='project-one'
              className='w-full z-auto py-2'
            />
            <p className='font-600 text-2xl'>E-LEARNING APP</p>
            <p className='font-400 text-xl'>Typescript Astro Tailwind</p>
          </div>
        </div>
        <div className='w-full px-6 object-cover md:object-scale-down'>
          <img
            src='/images/thumbnail-project-3-large.webp'
            alt='project-one'
            className='w-full z-auto my-2 hover:opacity-75 hover:bg-zinc-400 hover:bg-cover hover: cursor-pointer'
          />
          <div className='hidden group-hover:block absolute opacity-20 bg-zinc-500 object-cover '>
            <button className='underline justify-self-end py-2 col-span-1 mt-24 mr-10 w-1/8 decoration-teal-400 decoration-2 hover:scale-110 hover:transition-all hover:ease-in-out hover:text-teal-400 hover:bg-blend-darken hover:bg-zinc-800 px-2 rounded-sm'>
              LINK
            </button>
            <button>
              <img
                src='/images/icon-github.svg'
                alt='github'
                className='w-6 opacity-100'
              />
            </button>
          </div>
          <a
            href='/images/thumbnail-project-3-large.webp'
            target='_blank'
            rel='noreferrer'
            value='Download'
            className='hover:display-block'
          />
          <p className='font-600 text-2xl'>TODO APP</p>
          <p className='text-lg'>Typescript Next Sanity Tailwind</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
