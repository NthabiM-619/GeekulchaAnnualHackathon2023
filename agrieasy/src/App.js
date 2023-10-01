// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Seller from  './pages/Seller'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Buyers from './pages/Buyers';
// import './App.css';

function App() {
  return (
    <main className="">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/buyers" element={<Buyers />} />
          </Routes>
          <Footer />
        </Router>
    </main>
  );
}

export default App;
