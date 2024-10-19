import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import Navbar from './components/Navbar';
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Navbar />,
    children : [
      {
        path : "/",
        element : <h1>Accueil</h1>
      },
      {
        path : "skills",
        element : <h1>competences</h1>
      },
      {
        path : "projects",
        element : <h1>projets</h1>
      },
      {
        path : "contact",
        element : <h1>contact</h1>
      }      
    ]
  }


]);


createRoot(document.getElementById('app')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
