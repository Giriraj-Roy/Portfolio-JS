import About from "@/components/major/About";
import Navbar from "@/components/major/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    // <main className="bg-gradient-to-br from-[#fcd26f] via-orange-500 to-[#f7b83f] flex min-h-screen flex-col items-center justify-between p-24">
    <main className="bg-[radial-gradient(circle,#fcd26f,#f7b83f,#f7a31f)] flex min-h-screen flex-col items-center">
      <Navbar/>
      <div className="w-[100%] min-h-[90vh] p-16 pt-2 lg:p-24">
        <About/>
      </div>
    </main>
  );
}
export default Home
