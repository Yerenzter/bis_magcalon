import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './routers'
import './index.css'
import './lib';
import "./css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
