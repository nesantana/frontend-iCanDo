import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages
import Login from './Pages/Login'
import Lists from './Pages/Lists'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="lists/:id" element={<Lists />}></Route>
    </Routes>
  );
}

export default App;
