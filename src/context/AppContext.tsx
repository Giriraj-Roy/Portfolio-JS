import { createContext, Dispatch, SetStateAction } from "react";

interface AppContextType {
    pageState: number;
    changePage : (page : number)=> void;
    // setPageState: Dispatch<SetStateAction<number>>;
  }

export const AppContext = createContext<AppContextType>({pageState : 0, changePage : ()=>{}})