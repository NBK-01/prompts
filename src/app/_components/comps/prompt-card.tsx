"use client"

import React from 'react'
import { Badge } from '../ui/badge'
import { ScrollArea } from "~/app/_components/ui/scroll-area"
import { tech } from '~/lib/fonts'
import { Button } from '../ui/button'
import { ClipboardCopyIcon } from '@radix-ui/react-icons'
import { AnimatedTooltipSmall } from '../ui/animated-tooltip-sm'
import {toast} from "sonner"

interface PromptProps {
    title: string,
    desc: string,
    category: string,
    id: string,
    authorImage: string,
    authorName: string,
    prompt: string
}

const PromptCard = ({prompt, title, authorName, authorImage, desc, category}: PromptProps) => {
      function copyFunc() {
            void navigator.clipboard.writeText(prompt)
            toast.success("Prompt copied to clipboard")
        }

  return (
    <div className="max-w-[320px] border border-neutral-400 rounded-sm"> 
        <div className='flex flex-col px-8 py-8'>
            <div className="flex flex-col justify-between w-full">
                <Badge className="rounded-none w-[80px] bg-[#18c37d]"> {category} </Badge>
                <h1> {title} </h1>

            </div>
            <p className="text-sm text-neutral-500 mt-3"> {desc} </p>
            <ScrollArea className="h-[200px] w-[250px] rounded-md border p-4 mt-4">
                <p style={tech.style}> {prompt} </p>
            </ScrollArea>
            <div className="mt-4 flex justify-between">
                <Button size="sm" variant="outline" onClick={() => copyFunc()}> <ClipboardCopyIcon className="mr-2"/> Copy </Button>
                
               {authorImage ?  <AnimatedTooltipSmall author={authorName} image={authorImage} /> : <span> . </span>}
            </div>
        </div>
    </div>
  )
}

export default PromptCard