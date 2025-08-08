import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import schoolAnimation from './lottie/smart-school.json';
import logo from './assets/logo.png';

const Header = () => (
  <header className="bg-white shadow sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="EduFort Logo" className="h-10" />
        <div>
          <h1 className="text-xl font-bold text-blue-800">EduFort Technologies</h1>
          <p className="text-sm text-gray-600">Smart Safety for Smarter Schools</p>
        </div>
      </div>
      <nav className="space-x-4 text-blue-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/vision">Vision & Mission</Link>
        <Link to="/promise">Our Promise</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-blue-900 text-white py-6 mt-20 text-center">
    <p>&copy; {new Date().getFullYear()} EduFort Technologies Pvt. Ltd. | Jamshedpur, India</p>
  </footer>
);

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-20 text-center">
    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-5xl font-extrabold text-blue-900">
      Welcome to EduFort Technologies
    </motion.h1>
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-4 text-lg md:text-xl text-gray-700">
      Empowering Schools with Smart, Secure, and Seamless Attendance & Safety Solutions.
    </motion.p>
    <motion.div className="mx-auto mt-10 max-w-4xl" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 1 }}>
      <Lottie animationData={schoolAnimation} loop={true} />
    </motion.div>
  </div>
);

const Placeholder = ({ title }) => <div className="p-10 text-center text-xl">{title} Page</div>;

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Placeholder title="About Us" />} />
      <Route path="/vision" element={<Placeholder title="Vision & Mission" />} />
      <Route path="/promise" element={<Placeholder title="Our Promise" />} />
      <Route path="/pricing" element={<Placeholder title="Pricing" />} />
      <Route path="/testimonials" element={<Placeholder title="Testimonials" />} />
      <Route path="/team" element={<Placeholder title="Team" />} />
      <Route path="/contact" element={<Placeholder title="Contact" />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
