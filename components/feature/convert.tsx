"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import copy from "copy-to-clipboard"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

import { Icons } from "../icons"

const FormSchema = z.object({
  bio: z.string().min(2, {
    message: "Bio must be at least 2 characters.",
  }),
  // .max(160, {
  //   message: "Bio must not be longer than 30 characters.",
  // }),
})

export function TextareaForm() {
  const [value, setValue] = useState("")
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setValue(data.bio)
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  We don&apos;t <span>keep</span> your data.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {value && (
        <>
          <div>
            <div className="flex items-center gap-2">
              lowercase:{" "}
              <Icons.copy
                onClick={() => copy(value.toLowerCase())}
                size={18}
                className="cursor-pointer"
              />
            </div>
            <div>{value.toLowerCase()}</div>
          </div>
          <div>
            <div>UPPERCASE:</div>
            <div>{value.toUpperCase()}</div>
          </div>
          <div>
            <div>Capitalize:</div>
            <div className="capitalize">{value}</div>
          </div>
        </>
      )}
    </>
  )
}
