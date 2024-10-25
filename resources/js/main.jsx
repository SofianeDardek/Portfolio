import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Navbar />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "skills",
        element : <Skills />
      },
      {
        path : "projects",
        element : <h1>projets</h1>
      },
      {
        path : "contact",
        element : <Contact />
      }      
    ]
  }


]);


createRoot(document.getElementById('app')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
