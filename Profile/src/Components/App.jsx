import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import About from './About';
import Projects from './Projects';
import Contact from './ContactUs';
import Hero from "./Hero";
import Experience from "./Experience";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@fontsource/outfit";
import "@fontsource/roboto";
import '../Styles/Var.css';
// import SignIn from './SingIn.jsx';
// import SignUp from './SingUp.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
      <ToastContainer />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
