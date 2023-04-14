import logo from './logo.svg';

import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Success from './Success';
import DemographicForm from './DemographicForm';

function App() {

  return (
    <div className='app'>

   <Routes>
  
    <Route   path="/" element={<LoginPage />} />
    <Route   path="/Success" element={<Success />} />
    <Route   path="/DemographicForm" element={<DemographicForm />} />
   </Routes>
</div>
  );
}

export default App;
