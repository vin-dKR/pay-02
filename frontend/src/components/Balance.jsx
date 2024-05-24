import React from 'react'

function Balance({ Value }) {
  return (
    <div className='flex'>
        <div className="font-bold text-lg">
            Your Balance
        </div>      
        <div className="font-semibold ml-4 text-large">
            Rs { Value }
        </div>
    </div>
  )
}

export default Balance
