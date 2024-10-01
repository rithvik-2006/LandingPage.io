import Image from "next/image";
import LandingPage from "./(component)/landingPage";
import {Open_Sans , Roboto} from "next/font/google";
import { BackgroundBoxesDemo } from "./(component)/backgroundDemo";
import Navbar from "./(component)/navbar";
import WhyChoose from "./(component)/WhyChoose";
import Pricing from "./(component)/pricing";
import { ChakraProvider } from '@chakra-ui/react'


/*{
    name: "Border Magic",
    description: "Border Magic button for your website",
    showDot: false,
    component: (
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Border Magic
        </span>
      </button>
    ),
  }, */
const open_sans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <ChakraProvider>
    <main className="bg-gray-900 h-screen">
  <div className="dark ">
    {/* <LandingPage/> */}
    <Navbar/>
    <BackgroundBoxesDemo/>
    <WhyChoose/>
    <Pricing/>
    </div>
    </main>
    </ChakraProvider>
  );
}
