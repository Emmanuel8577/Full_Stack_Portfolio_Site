import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const HomePage = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-slate-900 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
        
        <footer className="py-10 text-center text-slate-500 border-t border-slate-100 dark:border-slate-800">
          © 2026 Apex Technovate Ltd. Build with ❤️ React and React Native.
        </footer>
      </div>
    </Router>
  );
}

export default App;