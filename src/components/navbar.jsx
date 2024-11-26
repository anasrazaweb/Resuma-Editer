import Image from 'next/image'
import React from 'react'
import Button from './ui/button'
import SearchBar from './search-bar'

const Navbar = () => {
  return (
    <nav className=' flex py-4 px-5 xl:px-16 md:px-10  justify-between items-center bg-[#f0f8ff] '>
<div>
<Image  src={"/svg-logo.svg"} alt="logo" height={110} width={110}/>
</div>
<div>
    <div className=' flex gap-5 items-center'>


        <div>
<SearchBar/>
        </div>
<Button>
Login
</Button>

<Button>
SingUp
</Button>
    </div>
</div>
    </nav>
  )
}

export default Navbar