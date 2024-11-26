import React from 'react'

const SearchBar = () => {
  return (
    <div className=' flex border border-primary px-3 py-1 rounded-full'>
        <input placeholder='Search ....' className={` border-none outline-none text-sm  ${inputClass}`}/>
        
    </div>
  )
}

export default SearchBar