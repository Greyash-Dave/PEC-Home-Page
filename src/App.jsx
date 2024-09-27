import './App.css'
import React from 'react'
import HomePage from './sections/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Footer from './components/Footer';


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <main>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
        </Routes>
    </main>
    <Footer />
</BrowserRouter>
    </>
  )
}

export default App
