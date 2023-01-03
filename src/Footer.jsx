import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-row justify-around bg-zinc-800 text-white py-8 border-t-2 border-white mx-20'>
        <p className='font-600 pt-1'>matt-o-west</p>
        <div className='flex flex-row items-center justify-center'>
          <a href='' className='font-600 top-0 left-0'>
            <img
              src='/images/icon-github.svg'
              alt='github'
              className='hover:scale-125 hover:transition-all hover:ease-in-out'
            />
          </a>
          <a href='' className='font-600 top-0 left-0'>
            <img
              src='/images/icon-frontend-mentor.svg'
              alt='frontend-mentor'
              className='hover:scale-125 hover:transition-all hover:ease-in-out'
            />
          </a>
          <a href='' className='font-600'>
            <img
              src='/images/icon-linkedin.svg'
              alt='linkedin'
              className='hover:scale-125 hover:transition-all hover:ease-in-out'
            />
          </a>
          <a href='' className='font-600'>
            <img
              src='/images/icon-codewars.svg'
              alt='codewars'
              className=' hover:scale-125 hover:transition-all hover:ease-in-out w-6 fill-white'
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
