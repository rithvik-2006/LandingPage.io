import "./globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { icons } from "lucide-react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata = {
  title: "Website Builder",
  icons: "./favicon.ico",
  };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased", 
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}



// import { Inter } from 'next/font/google'
// import { cn } from "@/lib/utils"

// // If loading a variable font, you don't need to specify the font weight
// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// })

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={inter.className}>
//       <body
//         className={cn(
//           "min-h-screen bg-background font-sans antialiased", 
//           inter.className
           
//         )}
//       >
//         {children}
//       </body>
//     </html>
//   )
// }
