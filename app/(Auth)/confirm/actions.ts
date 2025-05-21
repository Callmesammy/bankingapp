
"use server"

import { createClient } from "@/utils/supabase/server"
import { formSchema } from "../login/_components/login"
import z from "zod"
import { formSchemas } from "../login/_components/signup"

interface Docprops{
    success: boolean,
    error: string| string,
    data: unknown | null
}

export default async function LogActionns(formData: z.infer<typeof formSchema>): Promise<Docprops> {
    const supabase = await createClient()
    const datas = {
        email: formData.email,
        password: formData.password
    }
    const {data, error} = await supabase.auth.signInWithPassword(datas)
    if (data){
        console.log(data)
    }else{
        console.error("something went wrong", error)
    }
    return{
        error: error?.message || "Something went wrong",
        data: data,
        success: true
    }
}



export  async function SignUpAccount(formData: z.infer<typeof formSchemas>): Promise<Docprops> {
    const supabase = await createClient()
       
    const {data, error} = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options:{
            data:{
                state: formData.state,
        name: formData.name,
        surname: formData.surname,
        address: formData.address,
        code: formData.code
        } 
            }
       
      
    
    })
    if (data){
        console.log(data)
    }else{
        console.error("something went wrong", error)
    }
    return{
        error: error?.message || "Something went wrong",
        data: data,
        success: true
    }
}