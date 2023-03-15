import Header from './components/Header';
import ImagesGallery from './components/ImagesGallery';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Articles from './pages/Articles/Articles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Chatbot from './components/ChatBot/Chatbot';

const App = () => {
  return (
    <div>
      <Header title="Quantum World" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:userId" element={<Profile />} />{' '}
        {/* TODO: check path */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/image-search" element={<ImagesGallery />} />
      </Routes>
      <Chatbot />
    </div>
  );
};

export default App;
