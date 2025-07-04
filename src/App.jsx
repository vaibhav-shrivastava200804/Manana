import { Routes, Route } from 'react-router-dom';
import MainContent from './components/mainContent';
import ForgiveMe from './components/forgiveMe/ForgiveMe';
import OurMoments from './components/ourMoments/OurMoments';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/Forgive_Me" element={<ForgiveMe />} />
      <Route path="/Our_Moments" element={<OurMoments />} />
    </Routes>
  );
}

export default App;
