import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import { Shots, ErrorPage } from './pages'

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/shots',
        element: <Shots />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)