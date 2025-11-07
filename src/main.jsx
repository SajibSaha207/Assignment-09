import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import SkillProvider from './Provider/SkillProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider> 
  <SkillProvider>
     <RouterProvider router={router}></RouterProvider>
  </SkillProvider>
 </AuthProvider> 

  </StrictMode>,
)
