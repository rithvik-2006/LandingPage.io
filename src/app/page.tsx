import Image from "next/image";
import LandingPage from "./(component)/landingPage";
import {Open_Sans , Roboto} from "next/font/google";
import { BackgroundBoxesDemo } from "./(component)/backgroundDemo";
import Navbar from "./(component)/navbar";



const open_sans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-900 h-screen">
  <div className="dark ">
    {/* <LandingPage/> */}
    <Navbar/>
    <BackgroundBoxesDemo/>
    </div>
    </main>
  );
}
