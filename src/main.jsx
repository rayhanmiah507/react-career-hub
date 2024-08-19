import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Appliedjobs from './components/Appliedjobs/Appliedjobs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './authProvider/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import PrivateRouter from './router/PrivateRouter.jsx';
import Profile from './components/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/applied",
        element: <PrivateRouter><Appliedjobs></Appliedjobs></PrivateRouter>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/profile",
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
