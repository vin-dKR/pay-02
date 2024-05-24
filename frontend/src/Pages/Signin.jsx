import React from 'react'
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'

function Signin() {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign IN"} />
                <SubHeading label={"Enter your credential to Sign In"} />
                <InputBox label={"Email"} placeholder={"vinodkr@gmail.com"} />
                <InputBox label={"Password"} placeholder={"Password"} />
                <div className='mt-8'></div>
                <Button label={"Sign In"} />
            </div>
        </div>
    </div>
  )
}

export default Signin