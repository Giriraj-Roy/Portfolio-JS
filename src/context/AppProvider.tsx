import React, { ReactNode, useState } from 'react'
import { AppContext } from './AppContext'

interface AppProviderProps {
    children: ReactNode;
  }

const AppProvider : React.FC<AppProviderProps> = ({children}) => {
    const [pageState, setPageState] = useState<number>(1)
    const contextValue = {
        pageState : pageState,
        changePage : (page : number)=>{
            setPageState(page)
        }
    }
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
