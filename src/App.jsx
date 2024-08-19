import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './assets/Component/Layout/Layout'
import Home from './assets/Component/Home/Home'
import About from './assets/Component/About/About'
import Courses from './assets/Component/Courses/Courses'
import Contact from './assets/Component/Contact/Contact'

function App() {
   
  const router=createBrowserRouter([
    {
      path:'/',
      element:< Layout />,
      children:[
        {
          path:'/',
          element:< Home />,
        },
        {
          path:'/About',
          element:< About />,
        },
        {
          path:'/Courses',
          element:< Courses />,
        },
        {
          path:'/contact',
          element:< Contact />
        }
      ]
    }
  ])

  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
