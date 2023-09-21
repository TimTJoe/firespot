import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Routers, Outlet } from "react-router-dom"
import "@assets/css/index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Routers>
    <App />
    <Outlet />
  </Routers>,
)
