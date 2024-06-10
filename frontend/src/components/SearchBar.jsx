import React from 'react'

const SearchBar = () => {
  return (
    <div className='p-2 shadow-md shadow-slate-800 mt-4'>
        <input type="text" className='w-96 rounded-md'/>
        <button className='ml-2 bg-slate-700 text-white p-2 rounded-md'>Search</button>
    </div>
  )
}

export default SearchBar