import React from 'react'
import Typography from './ui/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/shadcn-accordion';



const faqData = [
      {
        title: "Why should I choose the resume builder over traditional resume writing methods, and what makes it more effective?",
        answer: "Using a resume builder streamlines the resume creation process, saving you valuable time and effort. It ensures that your resume is well-formatted, visually appealing, and aligned with industry standards. Additionally, it boosts your chances of landing interviews by highlighting your skills and experience in a way that stands out to hiring managers and recruiters. It also provides easy customization options to make your resume unique."
      },
      {
        title: "Can I personalize my resume templates to make them my own, or are the templates limited in customization?",
        answer: "Yes, our resume templates are fully customizable, giving you complete control over the look and feel of your resume. You can change fonts, colors, and section layouts to match your personal style or the specific job you're applying for. The templates are designed to be flexible, allowing you to adjust content and format as needed without compromising on professionalism or readability."
      },
      {
        title: "How does your resume builder help me stand out in an ATS scan, and does it improve my chances of being seen?",
        answer: "Absolutely! All our resume templates are designed with Applicant Tracking Systems (ATS) in mind, ensuring that your resume is easily readable by these systems. By using ATS-optimized templates, you increase your chances of passing the initial automated screenings and getting noticed by hiring managers. We also provide tips on including the right keywords, job-specific phrases, and formatting to further enhance your resume's ATS compatibility."
      },
      {
        title: "In what formats can I download my resume once it's ready, and which format is best for different job applications?",
        answer: "Yes, our platform allows you to download your resume in multiple formats including PDF, Word, and plain text. Whether you need a highly professional PDF to submit online or a Word document for easy editing, our builder gives you the flexibility to choose the format that suits your needs. This ensures that your resume can be shared easily and opened on any device without formatting issues."
      },
      {
        title: "Does the resume builder offer any guidance on how to write a compelling career summary or objective statement?",
        answer: "Yes, the resume builder provides prompts and examples for writing a compelling career summary or objective. It helps you craft a strong opening statement that highlights your skills and experience in a concise way. By following these suggestions, you can create a more impactful introduction to your resume that grabs the attention of recruiters and hiring managers."
      },

      {
        title: "How long does it take to create a professional resume using the resume builder, and is it time-efficient?",
        answer: "The resume builder is designed for efficiency, allowing you to create a professional resume in just a few hours. With pre-designed templates and easy-to-fill sections, the process is quick and straightforward. You can have a polished, customized resume ready for submission in no time, saving you valuable time compared to manual resume writing methods."
      },

  ];
  

const FAQSection = () => {
  return (
    <div className='flex justify-center items-center w-full  flex-col py-10'>
        <div className='  text-center w-fit lg:w-1/2'>
            <Typography variant='h2'>Frequently asked questions about <span className=' text-defaultPrimary'>Resume Writer</span></Typography>
         
        </div>

        <div className='  w-fit lg:w-[80%] mt-10 space-y-5'>


            {
                faqData.map((item,index)=>(
                    <Accordion key={index} type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent>
                      {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))


            }


            </div>
    </div>
  )
}

export default FAQSection