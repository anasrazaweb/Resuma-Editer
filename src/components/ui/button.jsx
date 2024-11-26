import React from 'react'

const Button = ({children,className}) => {
  return (
    <div className={` bg-defaultPrimary hover:bg-litePrimary text-white flex items-center w-fit rounded-md text-sm font-medium px-5 py-2   gap-2' ${className}`}>
        <button>
        {children}
        </button>
    </div>
  )
}

export default Button