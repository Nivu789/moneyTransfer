import React from 'react'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import NavigationContent from '../components/NavigationContent'


const Signup = () => {
  return (
    <div className='flex w-full justify-center items-center h-screen'>
    <div className='flex w-96 justify-center h-fit flex-col items-center bg-slate-400 pb-5 p-3 rounded-md'>
        <Heading heading={"Signup"}/>
        <form className='flex bg-slate-400 w-full flex-col items-center'>
            <InputBox type="text" placeholder="enter your firstname" label="firstname:"/>
            <InputBox type="text" placeholder="enter your lastname" label="lastname:"/>
            <InputBox type="text" placeholder="enter your email" label="email:"/>
            <InputBox type="text" placeholder="enter your password" label="password:"/>
            <Button type="submit" title="signup"/>
        </form>
        <div>
            <NavigationContent content="Already got an account?" to={"/login"} buttonText="Login"/>
        </div>
    </div>
    </div>
  )
}

export default Signup