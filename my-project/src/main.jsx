import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// react router
import {Route, RouterProvider ,createRoutesFromElements} from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

// redux
import { Provider } from 'react-redux'
import store from './redux/features/store'

// pages
import Login from './pages/Auth/Login'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="/login" element={<Login />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)