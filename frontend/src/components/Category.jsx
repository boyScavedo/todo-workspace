import React from 'react'

const Category = ({category}) => {
  return (
    <>
        <div className='bg-gray-400 h-[80%] w-[20%] space-y-2 rounded-xl overflow-hidden'>
          <h2 className='font-semibold text-xl text-center py-2 text-black bg-white'>{category}</h2>
        </div>
    </>
  )
}

export default Category