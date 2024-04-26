import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rott from './Component/Root/Rott.jsx';
import Home from './Component/Home/Home.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Login from './Component/Laout/Login.jsx';
import Register from './Component/Laout/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Rott></Rott>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
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
