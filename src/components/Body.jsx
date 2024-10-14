import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'

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
        <div>
            <Login />
            <Browse />
        </div>
    )
}

export default Body
