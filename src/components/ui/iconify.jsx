import { Icon } from '@iconify/react'
import React from 'react'

const IconifyIcon = ({iconName,className}) => {
  return (
    <div className=' cursor-pointer'>
        <Icon icon={iconName} className={`size-5 text-defaultPrimary ${className}`}/>
    </div>
  )
}

export default IconifyIcon