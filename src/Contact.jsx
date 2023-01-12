//import { Container } from 'postcss'
import React, { forwardRef } from 'react'
import ContactForm from './helpers/ContactForm'

const Contact = ({ text }, ref) => {
  return (
    <div className='lg:grid lg:grid-cols-2 md:grid-cols-1 md:pt-0 grid-rows-2 bg-zinc-800 pl-20 max-[360px]:pl-20'>
      <h1 className='text-5xl text-left pt-12' ref={ref}>
        {text}
      </h1>
      <ContactForm />
      <p className='text-left pb-10 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum
        quisquam dolor, quibusdam tenetur ut corrupti animi, quia eius
        voluptatem sapiente eum eaque reprehenderit vitae laudantium nam
        deserunt accusantium libero.
      </p>
    </div>
  )
}

export default forwardRef(Contact)
