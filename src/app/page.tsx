"use client"
import HomePage from "@/components/major/HomePage";
import AppProvider from "@/context/AppProvider";


const Home : React.FC = () => {
  return (
    <AppProvider>
      <HomePage/>
    </AppProvider>
  );
}
export default Home
