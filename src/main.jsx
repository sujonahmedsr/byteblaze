import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: ()=> fetch('https://dev.to/api/articles?per_page=30&top=7')
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
