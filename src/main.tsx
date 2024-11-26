import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Routes from "@/routes/Routes.tsx";

import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
