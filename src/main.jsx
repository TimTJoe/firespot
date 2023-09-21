import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Routers, Outlet } from "react-router-dom"
import "@assets/css/index.css"
import ProvideTheme from '@providers/ProvideTheme.jsx'
import { ProvideMode } from '@providers/ProvideMode.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Routers>
    <ProvideMode>
      <ProvideTheme>
        <App />
        <Outlet />
      </ProvideTheme>
    </ProvideMode>
  </Routers>,
)
