"use client"
import About from "@/components/major/About";
import HomePage from "@/components/major/HomePage";
import { AppContext } from "@/context/AppContext";
import AppProvider from "@/context/AppProvider";
import Image from "next/image";
import { useContext } from "react";

const Home : React.FC = () => {
  return (
    <AppProvider>
      <HomePage/>
    </AppProvider>
  );
}
export default Home
