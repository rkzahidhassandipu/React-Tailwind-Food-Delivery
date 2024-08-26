import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// page route
import Home from "./Pages/Home.jsx"
import Menu from "./Pages/Menu.jsx"
import Contact from "./Pages/Contact.jsx"
import Mobile_app from "./Pages/Mobile-app.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/mobile-app",
        element: <Mobile_app />
      },
      {
        path: "/contact-us",
        element: <Contact />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
