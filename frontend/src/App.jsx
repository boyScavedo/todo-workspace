import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Path } from './components/Path'

const App = () => {
  return (
    <RouterProvider router={Path} />
  )
}

export default App