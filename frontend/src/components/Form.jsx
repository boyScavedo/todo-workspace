import React from 'react'
import { UserRound, Lock, ClipboardList } from 'lucide-react'

const Form = () => {
    return (
    <>
        <form className='h-fit w-fit rounded-2xl shadow-lg p-14 space-y-6 bg-white bg-white/30 backdrop-blur-xs'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-4xl'>Sign Into <br /> Your Account</h2>
                <span className='p-4 bg-white rounded-full'><ClipboardList size={60} /></span>
            </div>
            <div className='flex items-end gap-2 w-96'>
                <span className='py-4'>
                    <UserRound color="#fff" size={22} />    
                </span>
                <div className='flex flex-col w-full'>
                    <label htmlFor="user" className='text-sm font-[200]'>Username / Email</label>
                    <input id='user' type="text" className='w-full px-4 py-3 rounded-xl border border-gray-400' />
                </div>
            </div>
            <div className='flex items-end gap-2 w-96'>
                <span className='py-4'>
                    <Lock color="#fff" size={22} />    
                </span>
                <div className='flex flex-col w-full'>
                    <label htmlFor="password" className='text-sm font-[200]'>Password</label>
                    <input id='password' type="password" className='w-full px-4 py-3 rounded-xl border border-gray-400' />
                </div>
            </div>
            <button className='px-4 py-2 bg-gradient-to-r from-[#09A7BC] to-[#2EC0EE] w-full font-bold text-white rounded active:scale-95 transition ease-in-out duration-100'>Signin</button>
        </form> 
    </>
  )
}

export default Form