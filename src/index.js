import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './components/Homepage';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer'
import Contactus from './components/Contactus';
import Team from './components/Team';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Homepage/> */}
    {/* <Aboutus/> */}
    <Team/>
    {/* <Contactus/> */}
    {/* <Footer/> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
