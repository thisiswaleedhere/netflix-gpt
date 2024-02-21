import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginForm from './LoginForm'
import Browse from './Browse';

const Body = () => {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <LoginForm />
  },
  {
    path: "/browse",
    element: <Browse />
  }])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body