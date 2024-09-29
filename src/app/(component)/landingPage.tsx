

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Laptop, Smartphone, Tablet, Play, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen  bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Laptop className="h-6 w-6 text-gray-100" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto  flex gap-4 sm:gap-6">
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                       Build a Cutting-Edge Website with the Latest Technology
                  </h1>
                    <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl">
                        Get a professional, highly scalable website tailored to your needs, starting at just $100.
                      </p>
                          </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-primary text-primary-foreground" size="lg">
                    Get Started Now
                  </Button>
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose Our Website Builder?
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Laptop className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-100" />
                <h3 className="text-xl font-bold">Easy to Use</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Create and customize your website with our easy-to-use interface.
                  
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Smartphone className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-100" />
                <h3 className="text-xl font-bold">Mobile Responsive</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your website looks great on all devices, from desktop to mobile.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Tablet className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-100" />
                <h3 className="text-xl font-bold">Customizable Templates</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose from hundreds of professional templates and customize to your liking.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Affordable Pricing</h2>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose a plan that works for you. No hidden fees, cancel anytime.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col p-6 bg-background dark:bg-gray-900 shadow-lg rounded-lg justify-between border">
                  <div>
                    <h3 className="text-2xl font-bold text-center">Basic</h3>
                    <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                      <span className="text-4xl font-bold">$100.99</span> 
                    </div>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                        5 Pages
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                        Custom Domain
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                        24/7 Support
                      </li>
                    </ul>
                  </div>
                <Button className="mt-6">Get Started</Button>
                

                </div>
                <div className="flex flex-col p-6 bg-background dark:bg-gray-900 shadow-lg rounded-lg justify-between ">
                  <div>
                    <h3 className="text-2xl font-bold text-center">Pro</h3>
                    <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                      <span className="text-4xl font-bold">$250.99</span> 
                    </div>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                        Unlimited Pages
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                        E-commerce Features
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                        Advanced Analytics
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6 bg-primary text-primary-foreground">Get Started</Button>
                </div>
                <div className="flex flex-col p-6 bg-background dark:bg-gray-900 shadow-lg rounded-lg justify-between border">
                  <div>
                    <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                    <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                      <span className="text-4xl font-bold">$500.99</span> 
                    </div>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                        Unlimited Everything
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                        Dedicated Account Manager
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                        Custom Integrations
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400">© 2023 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
