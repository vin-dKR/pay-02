import React from 'react'

function Button({ label }) {
  return (
    <button className='w-full text-white bg-gray-700 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5'>{ label }</button>
  )
}

export default Button
