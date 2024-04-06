import React from 'react'
import { LoginCard } from '../_components/comps/auth-comps'
import { getServerAuthSession } from "~/server/auth";
import { redirect } from 'next/navigation';

export default async function  LoginPage() {
    const session = await getServerAuthSession()

    if (session){
        redirect("/")
    }  

  return (
    <div className="flex h-screen w-screen justify-center mt-[calc(30vh)] overflow-hidden">
      <LoginCard title="Login" sub="Use your email or github to login"/>
    </div>
  )
}

