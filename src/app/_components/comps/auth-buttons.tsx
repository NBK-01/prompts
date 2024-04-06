"use client"

import React from 'react'
import { Button } from '../ui/button'
import { signIn, signOut } from 'next-auth/react'

export const Signin = () => {
  return (
    
    <Button variant="secondary" onClick={() => signIn()}>
        Login
    </Button>
  )
}

export const SingOut = () => {
    return (
        <Button variant="secondary" onClick={() => signOut()}>
            Logout
        </Button>
    )
}

export const SigninLarge = () => {
  return (
    <Button size="lg" onClick={() => signIn("github")}> Login </Button>
  )
}

