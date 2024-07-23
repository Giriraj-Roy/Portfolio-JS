"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AboutTitle, { AboutDesc } from '../../assets/data'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
  })

const About = () => {
    const [status, setStatus] = useState<number>(0)
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setStatus(prev=>{
                let temp_status=prev+1
                // console.log("temp_status", temp_status);
                if(temp_status==3){
                    clearInterval(interval)
                }
                return temp_status;
            })
        }, 2000)
        return () => clearInterval(interval);
    },[])
    return (
        <div className="block lg:flex p-6 lg:p-10 w-full lg:w-[90%] lg:max-h-[60vh] border-2 justify-around rounded-lg">
            {
                status < 1 ?
                <div className='flex w-[250px] h-[50vh] lg:max-h-[50vh] border-white border-4 lg:border-[0.4rem] rounded-lg items-center justify-center'>
                    <div className="border-[0.4rem] border-gray-300 border-t-[#eba434] rounded-full w-12 h-12 animate-spin"></div>
                </div>
                :
                <Image
                    src="/images/Giriraj3.jpg"
                    alt="Giriraj"
                    width={250}
                    height={250}
                    className={`lg:max-h-[50vh] border-white border-4 lg:border-[0.4rem] rounded-lg transition-opacity duration-800 animate-fadeIn `}
                    priority
                />
            }
        <div className='w-full lg:w-[55%] max-h-[40vh] lg:max-h-[60vh]  text-justify'>
            <h1 className={`mt-4 lg:mt-0 text-3xl ${inter.variable} font-mono font-medium`}>{AboutTitle[status]} {status < 3 ? ". . ." : " !!! 🎉"} </h1>
            <br/>
            <div className='max-h-[30vh] lg:max-h-[50vh] overflow-scroll no-scrollbar'>
                {
                    status > 0 && 
                    <p className={`transition-opacity duration-800 ${status > 0 ? "animate-fadeIn" : 'opacity-0'}`}>
                        {AboutDesc[0]}
                    </p>
                }
                {
                    status > 1 &&
                    <p className={`transition-opacity duration-800 ${status > 1 ? "animate-fadeIn" : 'opacity-0'}`}>
                        {AboutDesc[1]}
                    </p>
                }
                {
                    status > 2 &&
                    <p className={`transition-opacity duration-800 ${status > 2 ? "animate-fadeIn" : 'opacity-0'}`}>
                        {AboutDesc[3]}
                    </p>
                }
            </div>
        </div>
        </div>
    );
}

export default About
