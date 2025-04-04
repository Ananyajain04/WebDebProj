import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Gamepage from "../src/pages/gamepage.jsx"
import Login from '../src/pages/login.jsx'
import Albums from './pages/albumpage.jsx'
import SignIn from './pages/signin';
import Taylor from  '../src/pages/taylor';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gamepage" element={<Gamepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Taylor />} />
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
