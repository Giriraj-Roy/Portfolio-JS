import { Inter } from 'next/font/google'
import React from 'react'

interface ExpCardProps {
    jobDetails : {
        id: number,
        jobTitle : string,
        company : string,
        location : string,
        startDate : string,
        endDate  : string,
        desc : Array<string>
    },
}

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})


const ExperienceDesc : React.FC<ExpCardProps> = ({jobDetails}) => {
  return (
    <div className={`w-[100%] lg:w-[60%] px-2 py-4 lg:p-10 rounded-xl border-2 border-white ${inter.variable}`}>
        <div className="justify-between">
          <div>
            <div className="text-[1rem] lg:text-2xl">
              {jobDetails?.jobTitle ? jobDetails?.jobTitle : "Software Engineer"}
            </div>
            <div className="text-[0.8rem] lg:text-lg">
              {jobDetails?.company ? jobDetails?.company : "Stealth Mode"}
            </div>
          </div>
          <div className='flex lg:hidden text-sm flex-col items-start'>
            <div className="flex items-center justify-center">
              {jobDetails?.startDate} - {jobDetails?.endDate}
            </div>
          </div>
        </div>
        <div className='mt-2 hidden lg:block text-justify'>
          {jobDetails?.desc?.map((ele) => {
            return <li>{ele}</li>;
          })}
        </div>
      </div>
  )
}

export default ExperienceDesc
