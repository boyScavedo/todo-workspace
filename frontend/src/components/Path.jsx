import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
// import App from '../App'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Layout from './Layout'
import Home from '../pages/Home'
// import App from '../App'

export const Path =  createBrowserRouter([
    {path: '/register', element: <Register />},
    {path: '/login', element: <Login />},
    
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element:<Home />},
        ]
    }
])