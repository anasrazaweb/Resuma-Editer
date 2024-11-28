import React from 'react'
import Typography from './ui/typography'
import Image from 'next/image'

const EasyToUseSection = () => {
  return (
<div className=' py-10  '>
<div className=' flex md:flex-row flex-col justify-center items-center gap-5 md:px-20 px-3 py-10  bg-defaultPrimary text-white rounded-3xl'>
        <div className=' w-full md:w-[50%] '>
            <Typography variant='h2' className={"!text-white"}>
            Discover our easy-to-use resume builder for crafting resumes!</Typography>
            <Typography variant='p' className={"mt-5 !text-white"}>
            Get started with our resume builder by exploring our free options or signing up for a low-cost trial. It takes just a few clicks to experience the simplicity and effectiveness of our tool. We are dedicated to providing exceptional quality service to job seekers, making the process seamless and stress-free. Create a standout resume effortlessly and take the first step toward your career goals.</Typography>
        </div>
        <div className=' w-full md:w-[50%] flex justify-end items-center '>
            <Image src={"/img/Illustration.svg"} alt='Illustration-img' height={300} width={460}/>
        </div>
    </div>
</div>
  )
}

export default EasyToUseSection