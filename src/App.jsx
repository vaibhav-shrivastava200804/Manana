import { useState } from 'react';
import './App.css';
import MainContent from './components/mainContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgiveMe from './components/forgiveMe/ForgiveMe';
import OurMoments from './components/ourMoments/OurMoments';


function App() {
  return (
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/Forgive_Me' element={<ForgiveMe/>}/>
        <Route path='/Our_Moments' element={<OurMoments/>}/>
      </Routes>
  );
}

export default App;
