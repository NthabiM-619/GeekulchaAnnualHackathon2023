// import logo from './logo.svg';
import Navbar from './components/Navbar';

import Seller from './pages/Seller';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <main className="">
      <Router>
        <Navbar />
        <Seller/>

      </Router>
    </main>
  );
}

export default App;

