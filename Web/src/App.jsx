import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './index.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const CIA = lazy(() => import('./pages/CIA'));
const CPI = lazy(() => import('./pages/CPI'));
const Yeungnam = lazy(() => import('./pages/Yeungnam'));
const Apply = lazy(() => import('./pages/Apply'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const EnglishTest = lazy(() => import('./pages/EnglishTest'));

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cia" element={<CIA />} />
              <Route path="/cpi" element={<CPI />} />
              <Route path="/yeungnam" element={<Yeungnam />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/english-test" element={<EnglishTest />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
