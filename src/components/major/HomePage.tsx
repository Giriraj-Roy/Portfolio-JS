import React, { useContext } from 'react'
import Navbar from './Navbar'
import About from './About'
import { AppContext } from '@/context/AppContext'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import SwitchDefault from './SwitchDefault'

const HomePage : React.FC = () => {

  const context = useContext(AppContext)
  const pageState = context?.pageState
  // const changePage = context?.changePage
  // console.log("context", pageState);

  const renderContent = ()=>{
    switch(pageState) {
      case 1: return <About/>
      case 2: return <Experience/>
      case 3: return <Projects/>
      case 4: return <Contact/>
      default : return <SwitchDefault/>
    }
  }

  return (
    <main className="bg-[radial-gradient(circle,#fcd26f,#f7b83f,#f7a31f)] flex min-h-screen flex-col items-center">
        <Navbar/>
        <div className="w-[100%] min-h-[90vh] p-16 pt-2 lg:p-24">
          {
            renderContent()
          }
        </div>
      </main>
  )
}

export default HomePage
