import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { LanguageProvider } from './context/LanguageContext'
import { ImageLightboxProvider } from './context/ImageLightboxContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ImageLightboxProvider>
        <App />
      </ImageLightboxProvider>
    </LanguageProvider>
  </StrictMode>,
)
