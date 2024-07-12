import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n.js'; // Import i18n configuration
import { ChangeLangProvider } from './components/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChangeLangProvider>
    <App />
    </ChangeLangProvider>
  </React.StrictMode>,
)
