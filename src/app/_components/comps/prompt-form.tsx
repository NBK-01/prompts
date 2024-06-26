/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import * as React from "react"
import { Button } from "~/app/_components/ui/button"
import { Input } from "~/app/_components/ui/input"
import { Label } from "~/app/_components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/app/_components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "~/app/_components/ui/form"
import { Textarea } from "../ui/textarea" 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Briefcase, CheckCircle2, CircleDashed, CodeIcon, Globe2Icon, PaintBucket, Pencil } from "lucide-react"
import { api } from "~/trpc/react"
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

 
const formSchema = z.object({
  title: z.string(),
  desc: z.string().max(100),
  prompt: z.string(),
  category: z.string()
})
export function PromptForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
          desc: "",
          prompt: "",
          category: ""
        },
      })
      const router = useRouter();


      const createPost = api.post.post.useMutation({
        onSuccess: () => {
          router.push('/')
        },
      });
      
      function onSubmit(values: z.infer<typeof formSchema>) {
        createPost.mutate(values)
      }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input placeholder="Product list in VueJs"  {...field}/>
                    </FormControl>
                    <FormDescription>
                        What your prompt is
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
          )}
        />
              
            </div>
            <div className="flex flex-col space-y-1.5">
            <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                        <Input placeholder="Fetches data from API and displays 15 products with loading state and animations"  {...field}/>
                    </FormControl>
                    <FormDescription>
                        Short description about what your prompt does
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
          )}
        />
              
            </div>
            <div className="flex flex-col space-y-1.5">
            <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                       <FormControl>
                        <SelectTrigger id="framework">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent position="popper">
                            <SelectItem className="flex flex-row" value="any"> 
                              <div className='flex'> Any </div>
                            </SelectItem>
                            <SelectItem value="Coding" textValue="Coding"> 
                              <div className='flex'> <CodeIcon className="h-4 w-4 my-auto mr-2"/> Coding </div> 
                            </SelectItem>
                            <SelectItem value="Writing">
                              <div className='flex'> <Pencil className="h-4 w-4 my-auto mr-2"/> Writing </div> 
                            </SelectItem>
                            <SelectItem value="Design">
                              <div className='flex'> <PaintBucket className="h-4 w-4 my-auto mr-2"/> Design </div> 
                            </SelectItem>
                            <SelectItem value="Business">
                              <div className='flex'> <Briefcase className="h-4 w-4 my-auto mr-2"/> Business </div> 
                            </SelectItem>
                            <SelectItem value="Research">
                              <div className='flex'> <MagnifyingGlassIcon className="h-4 w-4 my-auto mr-2"/> Research </div> 
                            </SelectItem>
                        </SelectContent>
                   
                   
                    </Select>
                    <FormDescription>
                        Short description about what your prompt does
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
          )}
        />
              
            </div>
            
            <div className="flex flex-col space-y-1.5">
            <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                    <FormItem>
                      <FormLabel> Prompt </FormLabel>
                      <FormControl>
                        <Textarea id="name" className="resize-none h-[180px]" placeholder="" {...field} />
                      </FormControl>
                      
                      <FormMessage />
                    </FormItem>
              )}
            />
            </div>
          </div>

          {createPost.isSuccess ? (
            <Button type="submit" variant="success" className="w-[145px] mt-5" disabled={createPost.isLoading}>
                <CheckCircle2 className="mr-2"/> Done
            </Button>
            ):( 
            <Button type="submit" className="w-[145px] mt-5" disabled={createPost.isLoading}>
            {createPost.isLoading ? (
              <CircleDashed className="animate-spin" />
              ) : (
              "Save"
            )}
            </Button>
          )}
        </form>
        </Form>
     
  )
}
