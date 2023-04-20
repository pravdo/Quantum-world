import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { themeSettings } from 'theme';

// import Header from './components/Header';
import ImagesGallery from './components/ImagesGallery';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Articles from './pages/Articles/Articles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
// import Products from 'pages/Products/Products';
import SingleProductPage from 'pages/SingleProductPage/SingleProductPage';
import Footer from 'components/Footer';
// import Chatbot from './components/ChatBot/Chatbot';
import Error from 'pages/Error/Error';

const App = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        {/* <Header title="Quantum World" /> */}
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={isAuth ? <Home /> : <Navigate to="/" />}
          />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile/:userId"
            element={isAuth ? <Profile /> : <Navigate to="/" />}
          />
          {/* TODO: check path */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/online-store" element={<ShoppingCart />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/image-search" element={<ImagesGallery />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        {/* <Chatbot /> */}
      </ThemeProvider>
    </div>
  );
};

export default App;
