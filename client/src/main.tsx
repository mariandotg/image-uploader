import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index.tsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import '../styles/index.css'
import UploadedImage from './UploadedImage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/:id',
    element: <UploadedImage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
