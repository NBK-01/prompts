import React from 'react'
import Image from "next/image"
import { Button } from '../ui/button'
import { getServerAuthSession } from '~/server/auth'
import { Signin, SingOut } from './auth-buttons'
import Link from 'next/link'

export async function  Nav() {
  const session = await getServerAuthSession()
  return (
    <header className="md:fixed lg:block hidden w-full bg-background z-50 mb-10">
        <div className="flex justify-between max-w-screen-2xl px-10 pt-12">
            <Link className="flex space-x-3" href="/">
             
                <Image src="/black-logo.png" width={50} height={50} alt=""/>
                <h1 className="my-auto text-lg"> Prompts </h1>
              
            </Link>
            <div className="flex space-x-5">
                  <Link href="/create">
                    <Button> Submit a prompt </Button>
                  </Link>
              
                  {session ? <SingOut/> : <Signin/> }
                
            </div>
        </div>
        
    </header>
  )
}

