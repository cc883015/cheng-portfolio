import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { LanguageProvider } from './context/LanguageContext'
import { ImageLightboxProvider } from './context/ImageLightboxContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ImageLightboxProvider>
          <App />
        </ImageLightboxProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
