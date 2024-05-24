// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

function Balance({ value }) {

  // const [balance, setBalance] = useState(' ');

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/v1/account/balance')
  //   .then((response) => {
  //     setBalance(response.data.balance)
  //   })
    
  // }, [])
  // console.log(balance)
  
  return (
    <div className='flex'>
        <div className="font-bold text-lg">
            Your Balance
        </div>      
        <div className="font-semibold ml-4 text-large">
            {/* {balance} */}
            {value}
        </div>
    </div>
  )
}

export default Balance
