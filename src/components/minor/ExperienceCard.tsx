import React from 'react'
import ExperienceCircle from './ExperienceCircle'
import { Inter } from 'next/font/google'

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
    flagEnd : boolean
}

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})


const ExperienceCard : React.FC<ExpCardProps> = ({flagEnd ,jobDetails}) => {
  return (
    <div className={`mb-[5rem] flex ${inter.variable}`}>
      <div className="mx-2 w-48 hidden lg:flex items-center justify-center">
        {jobDetails?.startDate} - {jobDetails?.endDate}
      </div>
      <ExperienceCircle flagEnd={flagEnd} />
      <div className="w-[100%] lg:w-[60%] px-2 py-4 lg:p-10 rounded-xl border-2 border-white">
        <div className="justify-between">
          <div>
            <div className="text-lg lg:text-2xl">
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
    </div>
  );
}

export default ExperienceCard
