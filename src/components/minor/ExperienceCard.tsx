import React from 'react'
import ExperienceCircle from './ExperienceCircle'
import { Inter } from 'next/font/google'
import ExperienceDesc from './ExperienceDesc'

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
      <ExperienceDesc jobDetails={jobDetails} />
    </div>
  );
}

export default ExperienceCard
