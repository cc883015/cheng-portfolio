import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CertificatesPage from './pages/CertificatesPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
    </Routes>
  )
}
