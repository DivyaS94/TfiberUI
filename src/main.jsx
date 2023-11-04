import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Government from './pages/Government'
import './scss/main.scss'
import Landing from './pages/Landing'
import Home from './pages/Home'
import About from './pages/AboutUs'
import Contact from './pages/Contact'
import Excel from './components/Excel/Excel';
import Cell from './pages/CellTower'
import Residential from './pages/Residential'
import Enterprise from './pages/Enterprise'

if(!window.language) {
  window.language = 'english';
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/government",
    element: <Government language={window.language} />,
  },
  {
    path: "/AboutUs",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/Cell",
    element: <Cell language={window.language}/>,
  },
  {
    path: "/Enterprise",
    element: <Enterprise language={window.language} />,
  },
  {
    path: "/Residential",
    element: <Residential language={window.language}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
