import React from 'react'
import IconifyIcon from './ui/iconify'

const SearchBar = ({inputClass}) => {
  return (
    <div className=' flex border border-defaultPrimary px-3 py-1.5 rounded-full items-center'>
        <input placeholder='Search....' className={` border-none bg-transparent placeholder:text-litePrimary xl:w-52 outline-none text-sm  ${inputClass}`}/>
        <IconifyIcon iconName={"fe:search"}/>
    </div>
  )
}

export default SearchBar