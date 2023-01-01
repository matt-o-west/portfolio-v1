import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='grid grid-cols-2 w-100 h-0 pt-3 px-10 z-50'>
      <span className='font-600 w-1/3'>matt-o-west</span>
      <div className='flex space-x-4 pl-60 z-20 lg:flex-auto'>
        <a href='' className='font-600'>
          <img
            src='/images/icon-github.svg'
            alt='github'
            className='hover:scale-125 hover:transition-all hover:ease-in-out'
          />
        </a>

        <a href='' className='font-600'>
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
  )
}

export default Nav
