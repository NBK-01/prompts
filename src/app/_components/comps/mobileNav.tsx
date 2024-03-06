"use client"

import React, { useCallback } from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
  } from "~/app/_components/ui/drawer"
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from "next/image"
import { cn } from '~/lib/utils'
import { Badge, Briefcase, CodeIcon, ExternalLinkIcon, HomeIcon, PaintBucketIcon } from 'lucide-react'
import { Separator } from '../ui/separator'
import { Pencil1Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import path from 'path'
import { usePathname, useSearchParams } from 'next/navigation'
  

export function MobileNav() {  
    const path = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
    return (
      <Drawer>
      <DrawerTrigger asChild>
        <nav className="fixed flex lg:hidden bottom-0 w-[250px] rounded-b-none rounded-t-lg border border-[#18c37d] py-2 bg-background z-50">
            <div className="flex w-[400px] justify-center"> 
                <div className="flex space-x-3">
                    <Image src="/black-logo.png" width={50} height={50} alt=""/>
                    <h1 className="my-auto text-lg"> Prompts </h1> 
                </div>
            </div>
        </nav>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col px-5 py-4 justify-center w-full mx-auto">
            <div className="flex flex-col mx-auto">
                <Link className="flex space-x-3 mb-10" href="/">
                    <Image src="/black-logo.png" width={50} height={50} alt=""/>
                    <h1 className="my-auto text-lg"> Prompts </h1> 
                </Link>
            </div>
            <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-normal space-y-4">
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50", searchParams.get('category') === null ? "bg-neutral-100" : "bg-transparent")}
                href="/"
              >
                <HomeIcon className="h-[14px] w-[14px]"/>
                All
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-[#18c37d] hover:bg-[#18c37d]"> . </Badge>
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50", searchParams.get('category') === "coding" ? "bg-neutral-100" : "bg-transparent")}
                href={
                  // <pathname>?sort=desc
                  path + '?' + createQueryString('category', 'coding')
                }
              >
                <CodeIcon className="h-[14px] w-[14px]"/>
                Coding
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-[#18c37d] hover:bg-[#18c37d]"> . </Badge>
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50", searchParams.get('category') === "writing" ? "bg-neutral-100" : "bg-transparent")}
                href={
                  // <pathname>?sort=desc
                  path + '?' + createQueryString('category', 'writing')
                }
              >
                <Pencil1Icon className="h-[14px] w-[14px]"/>
                Writing
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-[#18c37d] hover:bg-[#18c37d]"> . </Badge>
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50", searchParams.get('category') === "design" ? "bg-neutral-100" : "bg-transparent")}
                href={
                  // <pathname>?sort=desc
                  path + '?' + createQueryString('category', 'design')
                }
              >
                <PaintBucketIcon className="h-[14px] w-[14px]"/>
                  Design
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-[#18c37d] hover:bg-[#18c37d]">.</Badge>
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50",searchParams.get('category') === "business" ? "bg-neutral-100" : "bg-transparent")}
                href={
                  // <pathname>?sort=desc
                  path + '?' + createQueryString('category', 'business')
                }
              >
                <Briefcase className="h-[14px] w-[14px]"/>
                
                Business
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-[#18c37d] hover:bg-[#18c37d]">.</Badge>
              </Link>
             
             
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50",searchParams.get('category') === "research" ? "bg-neutral-100" : "bg-transparent")}
                href={
                  // <pathname>?sort=desc
                  path + '?' + createQueryString('category', 'research')
                }
              >
                <MagnifyingGlassIcon className="h-[14px] w-[14px]"/>
                Research
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-[#18c37d] hover:bg-[#18c37d]">.</Badge>
              </Link>
            
            </nav>
            <Separator className="w-10/12 mx-auto my-5"/>
            <nav className="grid items-start px-4 text-sm font-normal space-y-4 pb-10">
            <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50")}
                href="/dashboard/profile"
              >
                <ExternalLinkIcon className="h-[14px] w-[14px]"/>
                Feature requests
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50")}
                href="/dashboard/profile"
              >
                <ExternalLinkIcon className="h-[14px] w-[14px]"/>
                Category Suggestions
              </Link>
            </nav>
            
          </div>
          <div className="flex space-x-5 mx-auto">
                    <Link href="/create">
                        <Button> Submit a prompt </Button>
                    </Link>
                
                    {/* {session ? <SingOut/> : <Signin/> } */}
                    
            </div>
        </div>
        
      </DrawerContent>
    </Drawer>
    )
  }
  
  