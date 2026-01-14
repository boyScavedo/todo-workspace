import React from 'react'
import Category from '../components/Category'
// import useAuth from '../hooks/useAuth'



const Dashboard = () => {

  // const {user} = useAuth(); clas

  return (
    <>
      <div className='bg-black/80 px-6 text-white h-screen w-full flex items-center justify-between'>
        {/*Creation  */}
        <Category category={"Creation"}/>

        {/* Pending */}
        <Category category={"Pending"}/>
        
        {/* Doing */}
        <Category category={"Doing"}/>

        {/* Completed */}
        <Category category={"Completed"}/>

      </div>
    </>
  )
}

export default Dashboard