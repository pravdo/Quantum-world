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
import Articles from './pages/Articles/Articles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import OnlineStore from 'pages/OnlineStore/OnlineStore';
import Feedback from 'pages/Feedback/Feedback';
import Footer from 'components/Footer';
// import Chatbot from './components/ChatBot/Chatbot';
import Error from 'pages/Error/Error';
import CartForProducts from 'pages/CartForProducts/CartForProducts';
import { BrowserRouter as Router } from 'react-router-dom';
import ShopContextProvider from 'context/onlineStore-context';
import Checkout from 'pages/Checkout/Checkout';

const App = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div>
      <ShopContextProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            {/* <Header title="Quantum World" /> */}
            <Navbar />
            <Routes>
              <Route
                path="/home"
                element={isAuth ? <Home /> : <Navigate to="/" />}
              />
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/profile/:userId"
                element={isAuth ? <Profile /> : <Navigate to="/" />}
              />
              <Route
                path="/checkout"
                element={isAuth ? <Checkout /> : <Navigate to="/" />}
              />
              <Route
                path="/articles"
                element={isAuth ? <Articles /> : <Navigate to="/" />}
              />
              <Route path="/online-store" element={<OnlineStore />} />
              <Route path="/cart" element={<CartForProducts />} />
              <Route path="/image-search" element={<ImagesGallery />} />
              <Route
                path="/feedback"
                element={isAuth ? <Feedback /> : <Navigate to="/" />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
            {/* <Chatbot /> */}
          </ThemeProvider>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
