import React from 'react'

const InputBox = ({label,placeholder,type}) => {
  return (
    <div className='flex bg-slate-500 flex-col p-3'>
        <label htmlFor="" className='font-medium text-xl'>{label}</label>
        <input type={type} placeholder={placeholder} className='p-2 rounded-md mt-2 w-80'></input>
    </div>
  )
}

export default InputBox