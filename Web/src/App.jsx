import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CIA from './pages/CIA';
import Yeungnam from './pages/Yeungnam';
import Apply from './pages/Apply';
import BlogDetail from './pages/BlogDetail';
import EnglishTest from './pages/EnglishTest';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cia" element={<CIA />} />
            <Route path="/yeungnam" element={<Yeungnam />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/english-test" element={<EnglishTest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
