import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Faculty from '../Pages/Faculty';

function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Faculty/>} />
        </Routes>
    </div>
  )
}

export default AppRoutes