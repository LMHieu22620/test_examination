'use client'

import { useAppContext } from '../../AppProvider'
import { AppleIcon, EmailIcon, EyeIcon, FacebookIcon, GoogleIcon, KeyIcon } from '@/public/svg'
import AvatarLogin from '@/public/Saly-10.png'
import Input from '@/src/components/Input'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (event: string) => {
    setEmail(event)
  }
  const handleChangePassWord = (event: string) => {
    setPassword(event)
  }
  console.log(email, 'emailemail');

  const { setSessionToken } = useAppContext()
  // 2. Define a submit handler.
  async function onSubmit() {
    const value = {
      "email": email,
      "password": password
    }
    try {
      await fetch(
        'https://frontend-exam.digitalfortress.dev/auth/login',
        {
          body: JSON.stringify(value)
          ,
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      ).then(async (res) => {
        const payload = await res.json()
        const data = {
          status: res.status,
          payload
        }
        console.log(res.ok, 'ssss');

        if (res.ok) {
          setSessionToken(payload.access_token)
          router.push('/')
        }
        return data

      })
    } catch (error: any) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:p-0 p-4'>
        <div className=' h-[calc(100vh-86px)] w-full flex justify-center items-center'>
          <div className='w-full md:max-w-[430px]'>
            <div className='text-[30px] font-medium'>Sign in</div>
            <div className='mt-5 mb-8'>
              <p>If you don’t have an account register</p>
              <p>
                You can <a className='text-[#0C21C1] font-semibold cursor-pointer'> Register here !</a>
              </p>
            </div>
            <div className='relative '>
              <Input onChange={handleChangeEmail} iconStart={<EmailIcon />} placeholder='Enter your email address' title='Email' />
            </div>
            <div className=' mt-12 relative '>
              <Input type='password' onChange={handleChangePassWord} iconStart={<KeyIcon />} placeholder='Enter your Password' title='Password' iconEnd={<EyeIcon />} />
            </div>
            <div className='flex justify-between items-center mt-4'>
              <div className='flex items-center'>
                <input
                  id='link-checkbox'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='link-checkbox' className='ms-2 text-xs font-medium text-gray-900 dark:text-gray-300'>
                  Rememebr me
                </label>
              </div>
              <p className='text-xs'>Forgot Password ?</p>
            </div>
            <div className='mt-12 '>
              <button type='submit' onClick={() => onSubmit()} className='p-3 w-full drop-shadow-2xl  text-lg text-white bg-[#0C21C1] rounded-full'>
                Login
              </button>
            </div>
            <p className='my-8 text-center text-[#B5B5B5] text-base'>or continue with</p>
            <div className='flex justify-center items-center gap-3'>
              <FacebookIcon />
              <AppleIcon />
              <GoogleIcon />
            </div>
          </div>
        </div>
        <div className='bg-[#000842] md:block hidden relative rounded-lg'>
          <div className='flex justify-center'>
            <Image
              src={AvatarLogin}
              width={500}
              height={500}
              alt="Picture of the author"
              className=' w-[521px] '
            />
          </div>
          <div className='text-[#FFFFFF] absolute bottom-24 left-24'>
            <h2 className='text-[30px] font-semibold'>Sign in to name</h2>
            <h2 className='font-light mt-3'>Code with Le Minh Hieu</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
