import React from 'react'
import Usercard from './Usercard'

const UserList = () => {
  return (
    <>
    <div className='w-full bg-slate-400 mt-10 h-80 p-2'>
        <Usercard/>
        <Usercard/>
        <Usercard/>
        <Usercard/>
    </div>
    </>
  )
}

export default UserList