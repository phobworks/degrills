import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notfound/NotFound';
import Partnership from './pages/partnership/Partnership';
import ScrollToTop from './components/ScrollToTop';
import ScrollToHash from './components/ScrollToHash';
import BackToTop from './components/BackToTop';
// import WhatsAppButton from './components/WhatsAppButton';
import './App.css';
import '@fontsource/plus-jakarta-sans';
import Footer from './components/footer/Footer';
import ProjectDetails from './pages/gallery/ProjectDetails';
import Gallery from './pages/gallery/Gallery';
import QualityPolicy from './pages/quality/QualityPolicy';
import HSEPolicy from './pages/hse/HSEPolicy';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/qualitypolicy" element={<QualityPolicy />} />
        <Route path="/hsepolicy" element={<HSEPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
      {/* <WhatsAppButton /> */}
    </BrowserRouter>
  );
}

export default App;
