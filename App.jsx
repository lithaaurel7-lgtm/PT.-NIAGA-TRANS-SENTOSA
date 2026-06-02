import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FleetFooter from './components/FleetFooter';
import ContactFooter from './components/ContactFooter';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FleetPage from './pages/FleetPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function AppContent() {
  const location = useLocation();

  const getFooter = () => {
    switch (location.pathname) {
      case '/armada':
        return <FleetFooter />;
      case '/kontak':
        return <ContactFooter />;
      default:
        return <Footer />;
    }
  };

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang-kami" element={<AboutPage />} />
        <Route path="/armada" element={<FleetPage />} />
        <Route path="/kontak" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {!isAuthPage && getFooter()}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
