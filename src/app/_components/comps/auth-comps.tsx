/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import { Button } from '../ui/button'
import { FaGithub, FaSpinner } from "react-icons/fa";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Suspense, useState } from "react";
import { toast } from "sonner";
import Image from 'next/image';

export default function LoginForm() {
  // const searchParams = useSearchParams();
  const [showEmailOption, setShowEmailOption] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false)

 
  return (
    <>
      <GithubBtn/>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true)
                signIn("email", {
                  email,
                  redirect: false,
                }).then((res) => {
                  if (res?.ok && !res?.error) {
                    setEmail("");
                    toast.success("Email sent - check your inbox!");
                    setIsLoading(false)
                  } else {
                    toast.error("Error sending email - try again?");
                    setIsLoading(false)
                  }
                });
          } 
        }
        className="flex flex-col space-y-3"
      >
        {showEmailOption && (
          <div>
            <div className="mb-4 mt-1 border-t border-gray-300" />
            <input
              id="email"
              name="email"
              autoFocus
              type="email"
              placeholder="auth@nayef.dev"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
        )}
        <Button
         
        
          {...(!showEmailOption && {
            type: "button",
            onClick: (e: { preventDefault: () => void; }) => {
              e.preventDefault();
              setShowEmailOption(true);
            },
          })}
          disabled={ isLoading }
        >
          {isLoading ? <FaSpinner className="animate-spin"/> : "Continue with email" }
        </Button>
      </form>
    </>
  );
}



export const GithubBtn = () => {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button size="lg" variant="outline" disabled={isLoading} onClick={() => { 
      setIsLoading(true)
      signIn("github") 
      }}>
      
      {isLoading ? <FaSpinner className="animate-spin mr-2"/> : <FaGithub className="mr-2 h-4 w-4"/> }
      Continue with Github

    </Button>
  )
}

export const LogoutBtn = () => {
  return (
    <Button onClick={() => signOut()}>
      Logout
    </Button>
  )
}


export const LoginCard = ({sub, title}: any) => {
  return (
    <div className="relative z-10 h-fit w-full max-w-md overflow-hidden border-y border-neutral-200 sm:rounded-md sm:border sm:shadow-xl">
    <div className="flex flex-col items-center justify-center space-y-3 border-b border-neutral-200 bg-neutral-50 px-4 py-6 pt-8 text-center sm:px-16">
    <Link href="/">
        <Image src="/black-logo.png" width={50} height={50} alt={""}/>
    </Link>      
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
      <p className="text-sm text-neutral-500">
        {sub}
      </p>
    </div>
    <div className="flex flex-col space-y-3 bg-neutral-100 px-4 py-8 sm:px-16">
      <Suspense
        fallback={
          <>
            <Button disabled={true}  variant="secondary"> Sign in with github </Button>
            <Button disabled={true}  variant="secondary"> Sign in with google </Button>
            <Button disabled={true}  variant="secondary"> Sign in with email </Button>
            <div className="mx-auto h-5 w-3/4 rounded-lg bg-gray-100" />
          </>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  </div>
  )
}