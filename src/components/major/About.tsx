"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AboutTitle from '../../assets/AboutDetails'

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
            <Image
                src="/images/Giriraj3.jpg"
                alt="Giriraj"
                width={250}
                height={250}
                className="lg:max-h-[50vh] border-white border-4 lg:border-[0.4rem] rounded-lg"
                priority
            />
        <div className='w-full lg:w-[55%] max-h-[40vh] lg:max-h-[60vh]  text-justify'>
            <h1 className="mt-4 lg:mt-0 text-3xl font-bold">{AboutTitle[status]} {status < 3 ? ". . ." : " !!! 🎉"} </h1>
            <br/>
            <div className='max-h-[30vh] lg:max-h-[50vh] overflow-scroll no-scrollbar'>
                {
                    status > 0 && 
                    <p className={`transition-opacity duration-800 ${status > 0 ? "animate-fadeIn" : 'opacity-0'}`}>I am a Software Engineer with over a year of experience, specializing in full-stack development. My technical expertise includes React Native, React.js, Next.js, Node.js, Express, Firebase, MySQL. I am proficient in C++, Python, JavaScript, TypeScript, SQL, HTML, CSS.</p>
                }
                {
                    status > 1 &&
                    <p className={`transition-opacity duration-800 ${status > 1 ? "animate-fadeIn" : 'opacity-0'}`}>I effectively use developer tools such as VS Code, Git, GitHub, MongoDB, Jupyter Notebook, Linux, and Detox Testing. My skill set encompasses Data Structures, Algorithms, Graphs, API Development, Trees, Cloud Computing, Object-Oriented Programming, IT, Networking, Mathematics, Back-end, Full-stack Development, and Image Processing.</p>
                }


                {/* <p>In addition to my technical skills, I excel in Blogging, Public Speaking, Analytics, Presentation, Sales, and Negotiation. I am fluent in English, Hindi, and Bengali.</p> */}
                {
                    status > 2 &&
                    <p className={`transition-opacity duration-800 ${status > 2 ? "animate-fadeIn" : 'opacity-0'}`}>I am pursuing a B.Tech in Electronics and Communication Engineering at IIIT Jabalpur, with a cumulative GPA of 8.2/10.0. I have held leadership roles as a Training and Placement Cell Representative and as a member of the Hostel Executive Committee at Aryabhatta Hostel.</p>
                }
            </div>
        </div>
        </div>
    );
}

export default About
