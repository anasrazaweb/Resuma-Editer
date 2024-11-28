import React from 'react'
import Typography from './ui/typography'
import Image from 'next/image'

const UnlimitedSection = () => {
  return (
    <div className=' flex md:flex-row flex-col gap-5 items-center justify-center'>
        <div className=' w-full md:w-[50%] flex justify-center items-center'>
            <Image src={"/img/unlimited.avif"} alt='unlimited-img' height={200} width={450}/>
        </div>
        <div className=' w-full md:w-[50%]'>
            <Typography variant='h2'>Build unlimited resumes effortlessly for any job.</Typography>
            <Typography variant='p' className={"mt-5"}>You can easily create, edit, and customize unlimited resumes with our intuitive tools. Choose from a variety of professional templates to give your resume a polished appearance. Once complete, download your resume in multiple file formats, including PDF, Word, or plain text. Tailor each version to suit specific job applications, ensuring your resume stands out to recruiters. Simplify the resume-building process with effortless customization and versatile options.</Typography>
        </div>
    </div>
  )
}

export default UnlimitedSection