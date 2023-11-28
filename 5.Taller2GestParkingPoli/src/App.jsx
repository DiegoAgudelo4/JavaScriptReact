import { useState } from 'react'
//import './App.css'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import ParkingCarros from './pages/ParkingCarros';
import ParkingMotos from './pages/ParkingMotos';
import { CarrosProvider } from './context/CarrosContext';

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Carros" element={<ParkingCarros />} />
            <Route path="/Motos" element={<ParkingMotos />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
    /*
    <Route path="/dashboard/*" element={<DashBoard />}>
            <Route path="indicadores" element={<p>indicadores</p>} />
            <Route path="metricas" element={<p>metricas</p>} />
          </Route>

          <Route path="/Users" element={<UsersPage />} />
          <Route path="/User/:id" element={<UserPage />} />
          <Route path="/*" element={<NotFoundPage />} />
    */
  )
}

export default App
