import React from 'react'
import { PromptForm } from '../_components/comps/prompt-form'
import { getServerAuthSession } from '~/server/auth'
import { SigninLarge } from '../_components/comps/auth-buttons'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../_components/ui/card'


export default async function CreatePrompt(){
    const session = await getServerAuthSession()
    if (session) {
        return (
            <div className="flex flex-col min-h-screen max-w-screen-2xl justify-center pt-20 items-center mx-auto overflow-hidden">
                 <Card className="w-[550px] mx-auto">
                    <CardHeader>
                        <CardTitle>Submit Prompt</CardTitle>
                        <CardDescription>Share your findings with the community</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <PromptForm/>
                    </CardContent>
                </Card>
            </div>
        )
    }
    else if (!session){
        return (
            <div className="flex flex-col min-h-screen justify-center items-center mx-auto overflow-hidden">
                <h1 className="text-3xl mb-8 text-center"> Login to gain access to prompt creation </h1>
                <SigninLarge/>
            </div>
        )
    }
  
}

