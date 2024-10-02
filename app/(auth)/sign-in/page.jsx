"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import { LoaderIcon } from 'lucide-react'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useState } from 'react'
import { toast } from 'sonner'
function SignIn() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [loader,setLoader]=useState(true);
    const router=useRouter();

    useEffect(()=>{
        const jwt=getCookie('jwt');
        if(jwt)
        {
            router.push('/')
        }
    },[])

    const onSignIn=()=>{
        setLoader(true)
        GlobalApi.SignIn(email,password).then(resp=>{
            setCookie('user',JSON.stringify(resp.data.user));
            setCookie('jwt',resp.data.jwt);
            toast("Login Successfully")
            router.push('/');
            setLoader(false)
        },(e)=>{
            console.log(e);
            toast(e?.response?.data?.error?.message)
            setLoader(false)
        })
    }


  return (
    <div className='flex items-baseline justify-center my-20'>
    <div className='flex flex-col items-center justify-center
    p-10 bg-slate-200 border border-gray-200
    '>
      <Image src='/gross.png' width={200} height={200} alt='logo'/>
      <h2 className='font-bold text-3xl'>Sign In into account</h2>
      <h2 className='text-gray-500'>Enter your email and password to sign in an account</h2>
      <div className='w-full flex flex-col gap-5 mt-7'>
          <Input placeholder='name@example.com'
          onChange={(e)=>setEmail(e.target.value)}
          />
          <Input type='password' placeholder='Password'
          onChange={(e)=>setPassword(e.target.value)}
          />
          <Button onClick={()=>onSignIn()}
              disabled={!(email||password)}>
               {loader?<LoaderIcon className='animate-spin'/>:'Sign In'}</Button>
          <p >Don't have an account ?
            <Link href={'/create-account'} className='text-blue-500'>
            Click here to create new account
            </Link>
          </p>
      </div>
    </div>
  </div>
  )
}

export default SignIn

