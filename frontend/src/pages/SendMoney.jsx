import React from 'react'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import Heading from '../components/Heading'

const SendMoney = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
        <div className='bg-slate-300 justify-center flex flex-col w-fit items-center h-fit p-6 rounded-xl'>
            <Heading heading="Send Money"/>
            <div className='text-xl'>Friend's Name</div>
            <InputBox placeholder="amount"/>
            <Button type="button" title="Send"/>
        </div>
    </div>
  )
}

export default SendMoney