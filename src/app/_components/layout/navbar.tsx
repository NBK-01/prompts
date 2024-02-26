import React from 'react'
import Image from "next/image"
import { Button } from '../ui/button'

const Nav = () => {
  return (
    <header className="fixed w-full">
        <div className="flex justify-between max-w-screen-2xl px-12 pt-14 pb-6 bg-[#f8f8f8]">
            <div className="flex space-x-3">
                <Image src="/black-logo.png" width={50} height={50} alt=""/>
                <h1 className="my-auto text-xl"> GPT prompts </h1>
            </div>
            <div className="flex">
                <Button> Hello </Button>
            </div>
        </div>
        
    </header>
  )
}

export default Nav