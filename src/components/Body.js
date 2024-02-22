import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginForm from './LoginForm'
import Browse from './Browse';
import Watch from './Watch';
import Error from './Error';

const Body = () => {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <LoginForm />,
    errorElement: <Error />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/watch/:watchId",
    element: <Watch />
  }])

  return (
    <div className='min-w-[340px] max-w-[1800px]  2xl:mx-auto'>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body