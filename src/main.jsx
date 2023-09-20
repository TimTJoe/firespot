import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Routers, Outlet } from "react-router-dom"
import "@assets/css/index.css"
import { Provider, darkTheme } from "@adobe/react-spectrum"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Routers>
    <Provider minHeight={"100vh"} theme={darkTheme}  >
      <App />
      <Outlet />
    </Provider>
  </Routers>,
)
