import React from 'react'
import { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState({ value: '' })
  const [email, setEmail] = useState({ value: '' })

  const handleNameChange = (event) => {
    setName({ value: event.target.value })
  }

  const handleEmailChange = (event) => {
    setEmail({ value: event.target.value })
  }

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + state.value)
    event.preventDefault()
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='grid grid-rows-3 grid-cols-1 pt-6'
      >
        <label>
          <input
            type='text'
            value={name.value}
            onChange={handleNameChange}
            className='ml-4 p-2 bg-zinc-800 placeholder-zinc-600 focus:outline-none focus:border-teal-400 focus:ring-2'
            placeholder='NAME'
          />
        </label>
        <label>
          <input
            type='email'
            value={email.value}
            onChange={handleEmailChange}
            className='ml-4 p-2 bg-zinc-800 placeholder-zinc-600 invalid:border-red-600 invalid:border-4 focus:outline-none focus:border-teal-400 focus:ring-2'
            placeholder='EMAIL'
          />
        </label>

        <input
          type=''
          className='h-20 w-4/5 m-2 bg-zinc-800 placeholder-zinc-600 focus:outline-none focus:border-teal-400 focus:ring-2'
          placeholder='MESSAGE'
        />

        <button
          type='submit'
          value='Submit'
          className='w-1/5 shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default ContactForm
