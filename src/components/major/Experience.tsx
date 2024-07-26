import { ExperienceList } from '@/assets/data'
import React from 'react'
import ExperienceCard from '../minor/ExperienceCard'

const Experience : React.FC = () => {
  return (
    <div className='overflow-scroll no-scrollbar'>
      {
        ExperienceList.map((ele)=>{
          return(
            <ExperienceCard flagEnd={ExperienceList.length==ele.id} jobDetails={ele}/>
          )
        })
      }
    </div>
  )
}

export default Experience
