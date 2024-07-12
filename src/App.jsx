import React from 'react';
import Home from './components/Home';
import About from './components/About';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import {  } from './components/Navbar';
import Header from './components/Header';

function App() {

  const Layout = () => {
    return (
      <>
      <Header />
      <Outlet />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    }
  ])
  
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
