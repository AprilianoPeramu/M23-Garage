import './App.css';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Login from './pages/Login';
// import Navbar from './pages/Navbar';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
