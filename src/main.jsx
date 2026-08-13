import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profile from './Component/Profile.jsx'
import Addpost from './Component/Addpost.jsx'
import Storyview from './Component/Storyview.jsx'

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/Profile",
      element:<Profile></Profile>
    },
    {
      path:"/Addpost",
      element:<Addpost></Addpost>
    },
    {
     path: "Story/:id/:tot",
      element:<Storyview></Storyview>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider  router={router}/>
)