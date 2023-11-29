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
import ManageUsers from './Pages/Dashboard/DashboardAdmin/ManageUsers';
import AdminHome from './Pages/Dashboard/DashboardAdmin/AdminHome';
import ManageSurvey from './Pages/Dashboard/DashboardAdmin/ManageSurvey';
import PaymentUsers from './Pages/Dashboard/DashboardAdmin/PaymentUsers';
import CreateSurvey from './Pages/Dashboard/Surveyor/CreateSurvey/CreateSurvey';
import CreatedSurvey from './Pages/Dashboard/Surveyor/CreatedSurvey/CreatedSurvey';
import ProUser from './Pages/NavBar/ProUser';
import SurveyDetails from './Pages/Surveys/SurveyDetails';



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
        element: <PrivateRoute><Surveys></Surveys></PrivateRoute>
      },
      {
          path: '/surveyDetail/:_id',
          element: <SurveyDetails></SurveyDetails>
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
        path: '/proUser',
        element: <PrivateRoute><ProUser></ProUser></PrivateRoute>
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
        },
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path: 'manageSurvey',
          element: <ManageSurvey></ManageSurvey>
        },
        {
          path: 'paymentUsers',
          element: <PaymentUsers></PaymentUsers>
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
