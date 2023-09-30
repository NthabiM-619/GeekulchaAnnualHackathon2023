// import logo from './logo.svg';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import CoursePage from './pages/CoursePage';
=======
import Home from './pages/Home';
import Seller from  './pages/Seller'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 1074642d8cc6e26cdc1d5a95aac84e6218722f3b
// import './App.css';

function App() {
  return (
    <main className="">
        <Router>
        <Navbar />
<<<<<<< HEAD
        <CoursePage/>
=======
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seller" element={<Seller />} />
          </Routes>
        </Router>
>>>>>>> 1074642d8cc6e26cdc1d5a95aac84e6218722f3b
    </main>
  );
}

export default App;
