import { Container } from 'postcss'
import React from 'react'
import ContactForm from './helpers/ContactForm'

const Contact = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 bg-zinc-800 pl-20 pb-32'>
      <h1 className='text-5xl text-left pt-12'>Contact</h1>
      <ContactForm />
      <p className='text-left'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum
        quisquam dolor, quibusdam tenetur ut corrupti animi, quia eius
        voluptatem sapiente eum eaque reprehenderit vitae laudantium nam
        deserunt accusantium libero.
      </p>
    </div>
  )
}

export default Contact
