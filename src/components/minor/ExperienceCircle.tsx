import React from 'react'

interface CircleProps {
    flagEnd : boolean
}


const ExperienceCircle : React.FC<CircleProps> = ({flagEnd}) => {
  return (
    <div className='flex w-[30%] items-center'>
            <div className='w-12 h-12 overflow-visible'>
                <div className='flex items-center justify-center border-4 border-white rounded-full'> {/* white circle container */}
                    <div className='m-1 w-8 h-8 bg-white rounded-full'/>   {/* white circle */}
                </div>
                {/* {
                    !flagEnd &&
                    <div className='ml-6 w-1 h-[6.5rem] md:h-[5rem] bg-white z-50' />
                } */}
            </div>
            <div className='w-[90%] h-1 bg-white' />
        </div>
  )
}

export default ExperienceCircle
