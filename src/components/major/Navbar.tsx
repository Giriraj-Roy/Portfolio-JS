"use client"
import { NavbarOptions } from '@/assets/data'
import React from 'react'

const Navbar = () => {

    const handleClick = (id : Number)=>{

    }
  return (
    <div className='flex w-[100%] h-[10vh] justify-around items-center'>
      {
        NavbarOptions?.map((ele)=>{
            return(
                <span onClick={()=>handleClick(ele?.id)} key={ele?.id} className='cursor-pointer'>{ele?.title}</span>
            )
        })
      }
    </div>
  )
}

export default Navbar
