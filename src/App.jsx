import './App.css'
import React from 'react'
import HomePage from './sections/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Assignment from './sections/Assignment';
import Academic from './sections/Academic';
import Examination from './sections/Examination';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Login from './sections/Login';


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <main>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/assignment' element={<Assignment />} />
            <Route path='/academic' element={<Academic />} />
            <Route path='/examination' element={<Examination />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </main>
    <Footer />
</BrowserRouter>
    </>
  )
}

export default App
