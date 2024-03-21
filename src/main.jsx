import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Main from './components/UI/pages/Main.jsx';
import AboutMe from './components/UI/pages/AboutMe.jsx';
import Portfolio from './components/UI/pages/Portfolio.jsx';
import Contact from './components/UI/pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: < Main/>,
      },
      {
        path: '/about',
        element: <AboutMe/>,
      },
      {
        path: '/portfolio',
        element: <Portfolio/>,
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
