"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check, Laptop, Smartphone, Tablet } from "lucide-react"

export default function Pricing() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 text-white dark:bg-gray-900">
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
    )
}