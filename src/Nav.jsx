import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='absolute w-full pt-0 px-10 z-50'>
      <p className='font-600 pt-1'>matt-o-west</p>
      <div className='flex flex-row z-40 max-w-sm min-w-full space-x-4 justify-end pr-36'>
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
  )
}

export default Nav
