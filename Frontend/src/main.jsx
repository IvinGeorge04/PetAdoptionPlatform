import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
 import AboutPage from './Pages/AboutPage.jsx'
 import ContactPage from './Pages/ContactPage.jsx'
 import Cat from './Pages/Cat.jsx'
 import Dog from './Pages/Dog.jsx'
 import CivilPage from './Pages/CivilPage.jsx'
 import SignUp from './Pages/SignUp.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
       <Route path="/about" element={<AboutPage/>}/> 
       <Route path="/contact" element={<ContactPage/>}/> 
       <Route path="/Cat" element={<Cat/>}/> 
       <Route path="/Dog" element={<Dog/>}/> 
       <Route path="/civil" element={<CivilPage/>}/> 
       <Route path="/SignUp" element={<SignUp/>}/>


      
    </Routes>
  </BrowserRouter>
)
