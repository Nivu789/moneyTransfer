import React from 'react'
import SearchBar from '../components/SearchBar'
import UserList from '../components/UserList'

const Dashboard = () => {
  return (
    <>
    <div className='bg-slate-700 text-white'>Balance : </div>
    <div className='flex flex-col w-full h-screen bg-slate-500 items-center'>
        <div className='flex flex-col w-1/2 bg-slate-600 items-center h-full p-3'>
            <SearchBar/>  
            <UserList/>
        </div>
    </div>
    </>
  )
}

export default Dashboard