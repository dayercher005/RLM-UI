import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route } from 'react-router-dom'
import LoginPage from './pages/login.tsx'
import App from './pages/App.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/log-in" Component={ LoginPage }></Route>
      <Route path="/" Component={ App }></Route>
    </HashRouter>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
