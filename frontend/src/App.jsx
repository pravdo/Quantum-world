import Header from './components/Header';
import ImagesGallery from './components/ImagesGallery';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

const App = () => {
  return (
    <div>
      <Header title="Quantum World" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
      <ImagesGallery />
    </div>
  );
};

export default App;
