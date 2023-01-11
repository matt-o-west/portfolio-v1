import React from 'react'
import { useState } from 'react'
import { send } from 'emailjs-com'

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  })
  const [name, setName] = useState({ value: '' })
  const [email, setEmail] = useState({ value: '' })

  const handleNameChange = (event) => {
    setName({ value: event.target.value })
  }

  const handleEmailChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + name.value)
    event.preventDefault()
    send('service_xin3emg', 'template_8x9x7xg', toSend, 'user_8x9x7xg')
      .then((response) => {
        console.log('SUCCESS!', response)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
  }

  return (
    <div className='row-span-2 max-[360px]:co mb-6 mt-6'>
      <form
        onSubmit={handleSubmit}
        className='grid grid-rows-3 lg:pt-32 md:pt-0 gap-y-4 pl-6'
      >
        <label>
          <input
            type='text'
            value={name.value}
            onChange={handleNameChange}
            className='ml-4 p-2 bg-zinc-800 placeholder-zinc-600 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 border-b-4 border-teal-400 hover:border-teal-200 required'
            placeholder='NAME'
          />
        </label>
        <label>
          <input
            type='email'
            value={email.value}
            onChange={handleEmailChange}
            className='ml-4 p-2 bg-zinc-800 placeholder-zinc-600 invalid:border-red-600 invalid:border-4 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 border-b-4 border-teal-400 hover:border-teal-200 required'
            placeholder='EMAIL'
          />
        </label>

        <input
          type=''
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
