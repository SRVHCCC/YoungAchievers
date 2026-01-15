import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookNow from './pages/BookNow';
import AdmissionInquiry from './pages/AdmissionInquiry';
import GalleryPage from './pages/GalleryPage';
import ClassroomsPage from './pages/ClassroomsPage';  
import PlaygroundPage from './pages/PlaygroundPage';
import LibraryPage from './pages/LibraryPage';
import PlayAndLearnPage from './pages/PlayAndLearnPage';  
import PrimaryFoundationPage from './pages/PrimaryFoundationPage'; 
import MiddleSchoolPage from './pages/MiddleSchoolPage'; 

import './index.css'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-cyan-200 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/admissions" element={<AdmissionInquiry />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/classrooms" element={<ClassroomsPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/academics/pre-primary" element={<PlayAndLearnPage />} />
            <Route path="/academics/primary" element={<PrimaryFoundationPage />} />
            <Route path="/academics/middle" element={<MiddleSchoolPage />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;