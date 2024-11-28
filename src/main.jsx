import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesToRead from './pages/PagesToRead.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listed-books',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/pages-to-read',
        element:<PagesToRead></PagesToRead>
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
