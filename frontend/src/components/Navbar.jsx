import React, { useState } from 'react'
import { User, UserRound } from 'lucide-react'

const Navbar = () => {

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        image: '',
    });
    

  return (
    <>
        <nav className='w-screen flex justify-between p-4 items-center'>
            <div className='font-extrabold text-5xl'>TO-D0</div>
            <div>
                <input type="search" className='border p-2 w-96  border-black focus:outline-none rounded-lg' />
            </div>

            {
                userDetails.name ? (
                    <div className='flex space-x-8'>
                        <div className='flex space-x-2 items-center'>
                            {
                                userDetails.image ? (
                                    <div>
                                        <img src={userDetails.image} alt="" className='' />
                                    </div>
                                ): (
                                    <span className='p-3 bg-gray-200 rounded-full'>
                                        <UserRound strokeWidth={2} />
                                    </span>
                                )
                            }
                            <span className='font-semibold text-2xl'>{
                                userDetails ? userDetails.name : null
                            }</span>
                        </div>
                        <button className='bg-red-600 px-4 py-2 rounded-xl font-bold text-white'>Signout</button>
                    </div>

                ): (

                    <button className='bg-blue-500 px-4 py-2 rounded-xl font-bold text-white'>Signin</button>
                )
            } 
        </nav>
    </>
  )
}

export default Navbar