import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
// import App from '../App'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Layout from './Layout'
import Dashboard from '../pages/Dashborad'
import ProtectedRoute from './ProtectedRoute'
// import App from '../App'

export const Path =  createBrowserRouter([
    {path: '/register', element: <Register />},
    {path: '/login', element: <Login />},
    
    {
        element: <ProtectedRoute />,
        children: [
            
            {
                path: '/',
                element: <Layout />,
                children: [
                    {index: true, element:<Dashboard />},
                ]
            }
        ]
        }
])