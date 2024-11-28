import React from 'react'
import Typography from './ui/typography'
import Image from 'next/image'
import Button from './ui/button'

const HeroSection = () => {
  return (
    <div className=' md:flex items-center justify-center w-full h-[80vh] gap-10  '>
        <div className=' w-full md:w-1/2  '>
        <Typography variant='h1' className={" mt-10"}>Professional <span className='text-defaultPrimary'>Resume Writer</span> to elevate your career success & effortlessly.</Typography>
        <Typography variant='p' className={"mt-5"}>Our professional and intuitive resume writer simplifies the process of crafting impactful resumes. Designed to highlight your unique skills and achievements, it ensures your profile stands out. Elevate your career success with a tool tailored for today's competitive job market.</Typography>
<div className=' flex gap-5'>
<Button className={ "mt-5"}> Get Started Now</Button>
<Button className={ "mt-5"}> Resume Examples</Button>
</div>
        </div>
        <div className=' w-full md:w-1/2 '>
        <div  className=' flex justify-center items-center relative mt-5 '>
        <Image  alt='her-img' src={"/img/back.png"} className='absolute mt-10 ' height={200} width={550}/>
        <Image  alt='her-img' src={"/img/back.png"} className='absolute mt-10  rotate-180 ' height={200} width={550}/>
        <Image  alt='her-img' src={"/img/star.png"} className='absolute  left-28  -top-28  ' height={200} width={30}/>
        <Image  alt='her-img' src={"/img/star.png"} className='absolute  left-16  -top-24  ' height={200} width={30}/>
        <Image  alt='her-img' src={"/img/star.png"} className='absolute  left-20  -top-20  ' height={200} width={50}/>
        <Image  alt='her-img' src={"/img/star.png"} className='absolute  left-28  -top-10  ' height={200} width={30}/>
        <Image  alt='her-img' src={"/img/resume3.png"} className='absolute rotate-[20deg]' height={200} width={250}/>
        <Image  alt='her-img' src={"/img/resume2.png"} className='absolute rotate-[10deg]' height={200} width={250}/>
        <Image  alt='her-img' src={"/img/resume1.png"} className='absolute rotate-0' height={200} width={250}/>
        <Image  alt='her-img' src={"/img/star.png"} className='absolute  right-28  -top-5  ' height={200} width={30}/>
        <Image  alt='her-img' src={"/img/star.png"} className='absolute  right-20  top-0  ' height={200} width={50}/>
        <Image  alt='her-img' src={"/img/star.png"} className='absolute  right-28  top-10  ' height={200} width={30}/>
        </div>
</div>
    </div>
  )
}

export default HeroSection