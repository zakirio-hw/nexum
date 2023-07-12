import './styles/index.css';
import { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from './scripts/AuthContext'
import Navbar from './components/navbar'
import Home from './views/home'
import LogIn from './views/login'
import Register from './views/register';
import Main from './views/main';

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
  const {currentUser} = useContext(AuthContext)
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
      </Routes>
    </div>
    </>
  );
}

export default App;
