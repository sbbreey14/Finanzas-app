import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import components
import { BrowserRouter } from 'react-router-dom'
import { App } from './App';

// Import CSS
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
