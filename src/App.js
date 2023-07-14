import './styles/index.css';
import { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from './scripts/AuthContext'
import Navbar from './components/navbar'
import Home from './views/home'
import LogIn from './views/login'
import Register from './views/register';
import Main from './views/main';
import Reviews from './views/reviews';
import About from './views/about';
import Contact from './views/contact';
import Footer from './components/footer';

const RedirectHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home', { replace: true });
  }, [navigate]);

  return null;
};

const RedirectLogIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login', { replace: true });
  }, [navigate]);

  return null;
};



function App() {
  const location = useLocation();
  const {currentUser} = useContext(AuthContext)
  console.log("Auth data:")
  console.log(currentUser)

  return (
    <>
    <Navbar />
    <div className='pt-12 h-screen font-cons bg-black text-white'>
      <Routes>
        <Route path="/" element={ <RedirectHome /> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/login" element={ <LogIn/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/main" element={  !currentUser ? <RedirectLogIn /> : <Main/> } />
        <Route path="/reviews" element={ <Reviews/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
    {location.pathname !== '/main' && <Footer/>}
    </>
  );
}

export default App;
