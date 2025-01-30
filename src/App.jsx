import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, BookOpen, Briefcase, Code, Award } from 'lucide-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './conponents/Home';
function App() {
  return (
    <div className="">
     <BrowserRouter>
     <Routes>
  <Route path="/" element={<Home />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;