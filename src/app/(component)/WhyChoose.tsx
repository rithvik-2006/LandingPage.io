"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Laptop, Smartphone, Tablet } from "lucide-react"


export default function WhyChoose() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 text-white bg-gray-900">
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
    )
}