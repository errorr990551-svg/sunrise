import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CityDetail from './pages/CityDetail';
import CitiesWeServe from './pages/CitiesWeServe';
import MarketArea from './pages/MarketArea';

export default function App() {
  return (
    <div className="site-wrapper">
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/market-area" element={<MarketArea />} />
          <Route path="/cities-we-serve" element={<Navigate to="/market-area" replace />} />
          <Route path="/tamil-nadu/:citySlug" element={<CityDetail />} />
          <Route path="/maharashtra/:citySlug" element={<CityDetail />} />
          <Route path="/karnataka/:citySlug" element={<CityDetail />} />
          <Route path="/telangana/:citySlug" element={<CityDetail />} />
          <Route path="/west-bengal/:citySlug" element={<CityDetail />} />
          <Route path="/madhya-pradesh/:citySlug" element={<CityDetail />} />
          <Route path="/:citySlug" element={<CityDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
