import React from 'react'

const Usercard = () => {
  return (
    <div className='bg-slate-500 flex justify-between items-center p-2 m-2'>
            <div className='flex gap-2'>
            <p>firstname</p>
            <p>lastname</p>
            </div>
            <button className='p-2 bg-green-500 rounded-xl'>Transfer money</button>
    </div>
  )
}

export default Usercard