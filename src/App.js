import { Routes, Route } from "react-router-dom"
import './App.css';

import Homepage from './components/Homepage/Homepage';
import Aboutus from './components/Aboutus/Aboutus';
import Footer from './components/Footer/Footer'
import Contactus from './components/Contactus/Contactus';
import Team from './components/Team/Team';
import Roadmaps from "./components/Roadmap/Roadmaps";
function App() {
  return (

    <div>
      <Routes>
      <Route path="/" element={ <Homepage/>} />
      <Route path="/about" element={<Aboutus/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/contact" element={<Contactus/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/roadmap" element={<Roadmaps/>}/>
      </Routes>
    </div>
  );
}

export default App;
