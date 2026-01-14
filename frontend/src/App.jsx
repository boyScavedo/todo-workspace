import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Path } from './components/Path'
import AuthProvider from './providers/AuthProvider'

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={Path} />
      </AuthProvider>
    </>
  )
}

export default App