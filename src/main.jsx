import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import History from './็History.jsx'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Contact from './Contact.jsx'

import Customer from './Customer.jsx'
import BNproject from './BNproject.jsx'
import ProjectDetail from './projectBN/ProjectDetail';
import Projectpuma from './projectBN/projectpuma.jsx'
import Organization from './Organization.jsx'
import Design from './Design.jsx'
import Maintain from './Maintain.jsx'
import Deteriorate from './Deteriorate.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/index",
    element: <History/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
 
  {
    path: "/customer",
    element: <Customer/>,
  },
  {
    path: "/project",
    element: <BNproject/>,
  },
  
  {
    path: "/project-detail",
    element: <ProjectDetail />, // เพิ่มเส้นทางสำหรับ project-detail
  },
  {
    path: "/organization",
    element: <Organization/>, // เพิ่มเส้นทางสำหรับ project-detail
  },
  {
    path: "/design",
    element: <Design />, // เพิ่มเส้นทางสำหรับ project-detail
  },
  {
    path: "/maintain",
    element: <Maintain/>, // เพิ่มเส้นทางสำหรับ project-detail
  },
  {
    path: "/deteriorate",
    element: <Deteriorate/>, // เพิ่มเส้นทางสำหรับ project-detail
  },
  {
    path: "/projectpuma",
    element: <Projectpuma/>, // เพิ่มเส้นทางสำหรับ project-detail
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
