
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Contact from './components/Contact'

function Routed() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mainpage" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routed
