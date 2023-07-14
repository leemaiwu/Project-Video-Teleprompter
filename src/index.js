import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import { TextContextProvider } from './context/TextContext'
import HomeScript from './pages/HomeScript'
import ModalVideo from './pages/ModalVideo'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <TextContextProvider>
        <HomeScript />
      </TextContextProvider>
    ),
    children: [
      {
        path: '/video',
        element: <ModalVideo />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
