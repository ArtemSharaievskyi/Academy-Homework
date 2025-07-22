import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../auth/Login.jsx'
import Register from '../auth/Register.jsx'
import Feed from '../components/Feed.jsx'
import PostForm from '../components/PostForm.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: '/',
        element: <Feed/>
      },
      {
        path: 'addPost',
        element: <PostForm/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)