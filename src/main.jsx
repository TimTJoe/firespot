import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Routers, Outlet } from "react-router-dom"
import "@assets/css/index.css"
import ProvideTheme from '@providers/ProvideTheme.jsx'
import { ProvideMode } from '@providers/ProvideMode.jsx'
import { ProvideFire } from '@providers/ProvideFire.jsx'
import { ProvideMap } from '@providers/ProvideMap.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Routers>
    <ProvideMode>
      <ProvideTheme>
        <ProvideFire>
          <ProvideMap>
            <App />
            <Outlet />
          </ProvideMap>
        </ProvideFire>
      </ProvideTheme>
    </ProvideMode>
  </Routers>,
)
