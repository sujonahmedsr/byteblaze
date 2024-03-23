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
import BlogDetails from './components/Navbar/BlogDetails.jsx';
import Content from './components/Content.jsx';
import Author from './components/Author.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=31&top=7')
      },
      {
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          }
        ]
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
    <Toaster />
  </React.StrictMode>,
)
