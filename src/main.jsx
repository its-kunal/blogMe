import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AuthProvider, { AuthContext, useAuth } from "./authContext"


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
