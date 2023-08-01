import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import {theme } from "./theme/lightTheme"
import { AppRouter } from './YCS-Landing/routes/AppRouter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
