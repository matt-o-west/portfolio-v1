import React from 'react'
import './index.css'

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
        <div className='py-4 transition-all '>
          <div className='shadow-lg group container rounded-md bg-white  max-w-sm flex justify-center items-center mx-auto content-div project-one  ease-in duration-75'>
            <div>
              <div className='w-full image-cover rounded-t-md'>
                <div className='p-2 m-4 w-28 h-10 bg-gray-700 rounded-md text-white float-right fd-cl group-hover:opacity-100'>
                  <span className='w-full flex space-x-2 justify-center'>
                    <img
                      src='https://img.icons8.com/color/48/000000/tailwindcss.png'
                      alt='github'
                      className='w-6 h-6'
                    />
                    <img
                      src='https://img.icons8.com/color/48/000000/react-native.png'
                      alt='github'
                      className='w-6 h-6'
                    />
                    <img
                      src='https://img.icons8.com/color/48/000000/javascript.png'
                      alt='github'
                      className='w-6 h-6'
                    />
                  </span>
                </div>
              </div>
              <div className='py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25'>
                <span className='block text-lg text-gray-800 font-bold tracking-wide'>
                  E-LEARNING APP
                </span>
                <span className='block text-gray-600 text-sm'>
                  Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula.
                  Donec bibendum faucibus purus eget cursus. Proin enim ante,
                  scelerisque vel sem sit amet, ultrices mollis risus. Praesent
                  justo felis, ullamcorper a cursus sed, condimentum at dui.
                </span>
              </div>
            </div>
            <div className='absolute opacity-0 fd-sh group-hover:opacity-100 text-center'>
              <button className='underline text-xl py-2 px-4 mt-6 my-2 w-1/8 decoration-black text-black decoration-2 hover:scale-110 hover:transition-all hover:ease-in-out hover:text-teal-400 hover:bg-blend-darken hover:bg-zinc-800 rounded-md'>
                DEMO
              </button>
              <div className='pt-2 text-center'>
                <button className='py-0 px-4 mt-6 w-1/8 hover:scale-110 hover:transition-all hover:ease-in-out hover:bg-blend-lighten rounded-md'>
                  <img src='/images/github-squared.svg' />
                </button>
              </div>
            </div>
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
