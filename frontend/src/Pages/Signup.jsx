import React from 'react'
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'

function Signup() {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign UP"} />
                <SubHeading label={"Enter your infromation to create an account"} />
                <InputBox label={"First Name"} placeholder={"Vinod"} />
                <InputBox label={"Last Name"} placeholder={"KR"} />
                <InputBox label={"Email"} placeholder={"vinodkr@gmail.com"} />
                <InputBox label={"Password"} placeholder={"Password"} />
                <Button label={"Sign Up"} />
            </div>
        </div>
    </div>
  )
}

export default Signup