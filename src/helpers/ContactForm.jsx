import React from 'react'
import { useState } from 'react'
import { send } from 'emailjs-com'

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    setToSend({
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.message]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    alert(
      'Thanks for reaching out! I will get back to you as soon as possible.'
    )
    event.preventDefault()
    send('service_wyiajrc', 'template_daavrko', toSend, 'zSYbQXaqcLfKJRZUd')
      .then((response) => {
        console.log('SUCCESS!', response)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
  }

  return (
    <div className='row-span-2 mb-6 mt-6'>
      <form
        onSubmit={handleSubmit}
        className='grid grid-rows-3 lg:pt-32 md:pt-0 gap-y-4 lg:pl-6 xs:p-0'
      >
        <label>
          <input
            type='text'
            onChange={handleChange}
            value={toSend.name}
            name='name'
            className='ml-4 p-2 bg-zinc-800 placeholder-zinc-600 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 border-b-4 border-teal-400 hover:border-teal-200 required'
            placeholder='NAME'
          />
        </label>
        <label>
          <input
            type='email'
            onChange={handleChange}
            value={toSend.email}
            name='email'
            className='ml-4 p-2 bg-zinc-800 placeholder-zinc-600 invalid:border-red-600 invalid:border-4 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 border-b-4 border-teal-400 hover:border-teal-200 required'
            placeholder='EMAIL'
          />
        </label>

        <input
          type='text'
          onChange={handleChange}
          value={toSend.message}
          name='message'
          className='h-20 w-4/5 m-2 bg-zinc-800 placeholder-zinc-600 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 border-b-4 border-teal-400 hover:border-teal-200 required'
          placeholder=' MESSAGE'
        />

        <button
          type='submit'
          value='Submit'
          className='w-1/5 min-w-min shadow bg-teal-600 hover:bg-teal-400 hover:text-zinc-900 hover:font-extrabold focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default ContactForm
