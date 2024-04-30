
import ReactDOM from 'react-dom/client'
import './index.css'
import 'animate.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rott from './Component/Root/Rott.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Component/Laout/Login.jsx';
import Register from './Component/Laout/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Add from './Component/Home/Add.jsx';
import Error from './Eroor/Error.jsx';
import AllArt from './Component/Laout/AllArt.jsx';
import PrivetRoute from './Route/PrivetRoute.jsx';
import MyArt from './Component/Home/MyArt.jsx';
import Details from './Component/Home/Details.jsx';
import AddUpdate from './Component/Laout/AddUpdate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rott></Rott>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://art-store-server-six.vercel.app/art')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addCarft',
        element: <PrivetRoute><Add></Add></PrivetRoute>
      },
      {
        path: '/add',
        element: <AllArt></AllArt>,
        loader: () => fetch('https://art-store-server-six.vercel.app/art')
      },
      {
        path: '/myart',
        element: <PrivetRoute><MyArt></MyArt></PrivetRoute>
      },
      {
        path: '/details/:id',
        element: <PrivetRoute>
          <Details></Details>
        </PrivetRoute>,
      },
      {
        path: '/update/:id',
        element: <AddUpdate></AddUpdate>,
        loader: ({ params }) => fetch(`https://art-store-server-six.vercel.app/art/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(


  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

)
