import { Routes, Route } from "react-router-dom"
import './App.css';

import Homepage from './components/Homepage';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer'
import Contactus from './components/Contactus';
import Team from './components/Team';
function App() {
  return (

    <div>
      <Routes>
      <Route path="/" element={ <Homepage/>} />
      <Route path="/about" element={<Aboutus/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/contact" element={<Contactus/>} />
      <Route path="/footer" element={<Footer/>} />
      </Routes>
    </div>
  );
}

export default App;
