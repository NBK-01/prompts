/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import Link from "next/link"
import React, { useCallback } from "react"
import { Badge } from "~/app/_components/ui/badge"
import { Separator } from "~/app/_components/ui/separator"
import { CodeIcon, ExternalLinkIcon, HomeIcon, ImageIcon, MagnifyingGlassIcon, Pencil1Icon, PersonIcon } from "@radix-ui/react-icons"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { cn } from "~/lib/utils"
import { Briefcase, PaintBucketIcon } from "lucide-react"

export function SideBar(amount: any) {
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
      <div className="hidden lg:block relative top-32 ml-10">
        <div className="flex fixed flex-col border-2 rounded-sm border-neutral-500">
          <div className="flex h-[60px] items-center px-6 pb-12 pt-8">
              <span className="my-auto text-lg font-normal"> Categories </span>
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
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50", searchParams.get('category') === "Coding" ? "bg-neutral-100" : "bg-transparent")}
                href={
                  // <pathname>?sort=desc
                path + '?' + createQueryString('category', 'Coding')
                }
              >
                <CodeIcon className="h-[14px] w-[14px]"/>
                Coding
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-[#18c37d] hover:bg-[#18c37d]"> . </Badge>
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50", searchParams.get('category') === "Writing" ? "bg-neutral-100" : "bg-transparent")}
                href={
                  // <pathname>?sort=desc
                  path + '?' + createQueryString('category', 'Writing')
                }
              >
                <Pencil1Icon className="h-[14px] w-[14px]"/>
                Writing
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-[#18c37d] hover:bg-[#18c37d]"> . </Badge>
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50", searchParams.get('category') === "Design" ? "bg-neutral-100" : "bg-transparent")}
                href={
                  // <pathname>?sort=desc
                  path + '?' + createQueryString('category', 'Design')
                }
              >
                <PaintBucketIcon className="h-[14px] w-[14px]"/>
                  Design
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-[#18c37d] hover:bg-[#18c37d]">.</Badge>
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50",searchParams.get('category') === "Business" ? "bg-neutral-100" : "bg-transparent")}
                href={
                  // <pathname>?sort=desc
                  path + '?' + createQueryString('category', 'Business')
                }
              >
                <Briefcase className="h-[14px] w-[14px]"/>
                
                Business
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-[#18c37d] hover:bg-[#18c37d]">.</Badge>
              </Link>
             
             
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50",searchParams.get('category') === "Research" ? "bg-neutral-100" : "bg-transparent")}
                href={
                  // <pathname>?sort=desc
                  path + '?' + createQueryString('category', 'Research')
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
                href="https://github.com/NBK-01/prompts.nayef.dev/issues/new?assignees=&labels=enhancement&projects=&template=category-suggestions.md&title="
              >
                <ExternalLinkIcon className="h-[14px] w-[14px]"/>
                Feature requests
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50")}
                href="https://github.com/NBK-01/prompts.nayef.dev/issues/new?assignees=&labels=enhancement&projects=&template=category-suggestions.md&title="
              >
                <ExternalLinkIcon className="h-[14px] w-[14px]"/>
                Category Suggestions
              </Link>
            </nav>
          </div>
        </div>
      </div>
  )
}

interface UserDetails {
  initials?: string,
  image?: string,
  name?: string,
  email?: string,
  id?: string
}
