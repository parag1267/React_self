import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './compoents/Home'
import About from './compoents/About'
import Dashboard from './compoents/Dashboard'
import Contact from './compoents/Contact'
import Navbar from './compoents/Navbar'
import ParamsComp from './compoents/ParamsComp'
import Course from './compoents/Course'
import MockTest from './compoents/MockTest'
import Fees from './compoents/fees'
import Report from './compoents/Reports'
import NotFound from './compoents/NotFound'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element: 
      <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: "/dashboard",
      element: 
      <div>
        <Navbar />
        <Dashboard />
      </div>
    },
    {
      path: "/contact",
      element: 
      <div>
        <Navbar />
        <Contact />
      </div>,
      children:[
        {
          path:"course",
          element: <Course />
        },
        {
          path:"mock-test",
          element: <MockTest />
        },
        {
          path:"fees",
          element: <Fees />
        },
        {
          path:"report",
          element: <Report />
        },
      ]
    },
    {
      path: "/student/:id",
      element: 
      <div>
        <Navbar />
        <ParamsComp />
      </div>
    },
    {
      path:"/*",
      element:<NotFound />
    }
    
  ]
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
