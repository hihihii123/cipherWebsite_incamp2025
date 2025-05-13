import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import StartPage from './start.jsx';
import SuccessPage from './success.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/cipherpage/' element={<StartPage />} />
      <Route path='/successyippee/groupn' element={<SuccessPage />} />
    </Routes>
  </BrowserRouter>,
)
