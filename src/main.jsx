import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesToRead from './pages/PagesToRead.jsx'
import BookDetails from './components/BookDetails.jsx'
import ReadBooks from './components/ReadBooks.jsx'
import WhichListBooks from './components/WhichListBooks.jsx'
import toast, { Toaster } from 'react-hot-toast';
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
      },
      {
        path:'/listed-books',
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>
          },
          {
            path:'whichlist',
            element:<WhichListBooks></WhichListBooks>
          }
        ]
      },
      {
        path:'/book/:paraId',
        element:<BookDetails></BookDetails>,
        loader:()=>{return fetch('../public/books.json')}
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
  </StrictMode>,
)
