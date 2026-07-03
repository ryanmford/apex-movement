import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './contexts/AppContext';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Blog from './pages/Blog';
import About from './pages/About';
import Hire from './pages/Hire';

export default function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="learn" element={<Learn />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="hire" element={<Hire />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </HelmetProvider>
  );
}
