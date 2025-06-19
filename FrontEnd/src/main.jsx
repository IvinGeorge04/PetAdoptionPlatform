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
 import SignUp from './Pages/SignUp.jsx'
import Laws from './Pages/Laws.jsx'
import PawsAndPeace from './Pages/pawsAndPeace.jsx'
import MedicalCare from './Pages/MedicalCare.jsx'
import Login from './Pages/Login.jsx'
import FaqPage from './Pages/FaqPage.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
       <Route path="/about" element={<AboutPage/>}/> 
       <Route path="/contact" element={<ContactPage/>}/> 
       <Route path="/Cat" element={<Cat/>}/> 
       <Route path="/Dog" element={<Dog/>}/> 
       <Route path="/SignUp" element={<SignUp/>}/>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/Laws" element={<Laws></Laws>}/>
       <Route path="/PawsAndPeace" element={<PawsAndPeace></PawsAndPeace>}/>
       <Route path="/MedicalCare" element={<MedicalCare/>}/>
       <Route path="/FaqPage" element={<FaqPage/>}/>


      
    </Routes>
  </BrowserRouter>
)
