import React from 'react'
import Typography from './ui/typography'
import Built from './ui/built'
import Image from 'next/image'

const GuidanceSection = () => {
  return (
    <div className=' flex md:flex-row flex-col  items-center justify-center py-10'>
        <div  className=' w-full  md:w-[50%] flex justify-center items-center'>

            <Image src={"/img/resuma-guidance.svg"} alt='svg-guidance' height={300} width={1000}/>
        </div>
        <div  className=' w-full  md:w-[50%]'>
            <Typography variant='h2'>Build standout resumes effortlessly using the best maker as your guide.</Typography>
            <Typography variant='p' className={ "mt-5"}>Effortlessly craft professional resumes with our intuitive resume builder. Designed to guide you step by step, ensuring a standout application. Build confidence and impress employers with ease. Achieve your career goals faster and smarter</Typography>
           <div className='mt-5 space-y-1'>
           <Built>Create professional resumes quickly with our user-friendly builder.</Built>
            <Built>Step-by-step guidance for a smooth and stress-free process.</Built>
            <Built>Tailor your resumes to match specific job requirements.</Built>
            <Built>Save time with pre-built sections and examples.</Built>
            <Built>Impress employers with a standout, customized resume.</Built>
           </div>
            
        </div>
    </div>
  )
}

export default GuidanceSection