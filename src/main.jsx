import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

import Home from './Pages/Home/Home';
import Route from './Route/Route';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import Surveys from './Pages/Surveys/Surveys';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/LoginAndRegPage/Login';
import Register from './Pages/LoginAndRegPage/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import CreateSurvey from './Pages/CreateSurvey/CreateSurvey';
import CreatedSurvey from './Pages/CreatedSurvey/CreatedSurvey';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/surveys',
        element: <Surveys></Surveys>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        {
          path: 'createSurvey',
          element: <PrivateRoute><CreateSurvey></CreateSurvey></PrivateRoute>
        },
        {
          path: 'createdSurvey',
          element: <PrivateRoute><CreatedSurvey></CreatedSurvey></PrivateRoute>
        }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
