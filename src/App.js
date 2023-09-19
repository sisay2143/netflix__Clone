import './App.css';
import Nav from './Components/Nav';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Account from './pages/Account'
import { AuthContetProvider } from './context/Auth';
function App() {
  return (
   <div className='App'>
    <AuthContetProvider>
    <Router>
    <Nav />
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/login' element = {<Login />} />
      <Route path = '/Signup' element = {<Signup />} />
      <Route path = '/Account' element = {<Account />} />
    </Routes>
    </Router>
   
    </AuthContetProvider>
    
    
  
   </div>
  );
}

export default App;
