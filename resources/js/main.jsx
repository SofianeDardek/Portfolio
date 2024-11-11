import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
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
        element : <Projects />
      },
      {
        path : "projects/:id",
        element : <ProjectDetails />
      },
      {
        path : "contact",
        element : <Contact />
      },
      {
        path : "*",
        element : <NotFound />
      }       
    ]
  }


]);


createRoot(document.getElementById('app')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
