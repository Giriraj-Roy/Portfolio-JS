"use client"
import { NavbarOptions } from '@/assets/data'
import { AppContext } from '@/context/AppContext'
import React, { useContext } from 'react'

const Navbar = () => {

  const context = useContext(AppContext)
  const pageState = context?.pageState
  const changePage = context?.changePage

    // const handleClick = (id : number)=>{
    //   changePage(id)
    // }
    return (
      <div className='flex w-[100%] h-[10vh] justify-around items-center'>
        {
          NavbarOptions?.map((ele)=>{
              return(
                  <span onClick={()=>changePage(ele?.id)} key={ele?.id} className='cursor-pointer'>{ele?.title}</span>
              )
          })
        }
      </div>
    )
}

export default Navbar
