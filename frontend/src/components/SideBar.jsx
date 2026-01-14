import React from 'react'
import { Plus } from 'lucide-react'

const SideBar = () => {
  return (
    <>
        <div className='bg-black/60 h-screen w-[13%] px-3 space-y-2'>
            <h2 className='w-full text-center text-3xl font-bold text-white py-2'>WORKSPACE</h2>
            <button className='flex items-center justify-between space-x-2 px-2 py-1 w-full bg-white rounded'>
              <span className='px-1 py-1 text-md font-semibold overflow-hidden'>Add Workspace</span>
              <span className='p-1 border border-gray-300 rounded'>
                <Plus size={20} color='#000' />
              </span>
            </button>
            <div className='font- bg-gray-300 px-1 py-2 rounded overflow-hidden text-center'>
                Workspace 1
            </div>
        </div>
    </>
  )
}

export default SideBar