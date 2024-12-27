import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Locations from './pages/Locations';
import Chart from './components/Chart';
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// const Navbar = () => (
//   <nav className="navbar">
//     <Link className='logo' to="/">RoadCamera</Link>
//     <div className='links'>
//       <Link className='link' to="/dashboard">Dashboard</Link>
//       <Link className='link' to="/about">About</Link>
//       <div className='elips'></div>
//     </div>
//   </nav>
// );

// const Footer = () => (
//   <div className='footer'>
//     <div className='left'>
//       <nav className="navbar footer-nav">
//         <Link className='logo' to="/">RoadCamera</Link>
//         <div className='links'>
//           <Link className='link' to="/dashboard">Dashboard</Link>
//           <Link className='link' to="/about">About</Link>
//         </div>
//       </nav>
//     </div>
//     <div className='right'>
//       <p>&copy; 2024 RoadCamera. All Rights Reserved.</p>
//       <p>Created by: <a href="https://t.me/KOLEN_Z" target='blanck'>Kolen</a> & <a href="https://t.me/khudoberdi0410" target='blanck'>Khudoiberdi</a></p>
//       <ul className='link_list'>
//         <li><a href="https://t.me/KOLEN_Z" target='blanck'><FaTelegram className='link_list_a'/></a></li>
//         <li><a href="https://github.com/MakhmudovM" target='blanck'><FaGithub className='link_list_a'/></a></li>
//         <li><a href="https://t.me/khudoberdi0410" target='blanck'><FaTelegram className='link_list_a'/></a></li>
//         <li><a href="https://github.com/xudoyberdi0410" target='blanck'><FaGithub className='link_list_a'/></a></li>
//       </ul>
//     </div>
//   </div>
// );

const App = () => {
  return (
    <Router>
      <div className='container'>
        {/* Навигация */}
        <Navbar />
        
        {/* Основные маршруты */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/chart" element={<Chart />} /> {/* Новый маршрут для графика */}
        </Routes>
        
        {/* Футер */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
