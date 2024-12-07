import React from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Browse from './Browse'
import Login from './Login'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])

    return (
        <div className='h-screen'>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
