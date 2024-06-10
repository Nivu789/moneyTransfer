import React from 'react'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import NavigationContent from '../components/NavigationContent'

const Login = () => {
  return (
    <div className='flex w-full justify-center items-center h-screen'>
    <div className='flex w-96 justify-center h-fit flex-col items-center bg-slate-400 pb-5 p-3 rounded-md'>
        <Heading heading={"Login"}/>
        <form className='flex bg-slate-400 w-full flex-col items-center'>
            <InputBox type="text" placeholder="enter your email" label="email:"/>
            <InputBox type="text" placeholder="enter your password" label="password:"/>
            <Button type="submit" title="login"/>
        </form>
        <div>
            <NavigationContent content="New here?" to={"/signup"} buttonText="Signup"/>
        </div>
    </div>
    </div>
  )
}

export default Login