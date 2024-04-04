import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Header';
import {Routes , Route} from "react-router-dom"
import Single from './pages/singleProduct/Single';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Auth from './Auth/Auth';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/single/:id" element={<Single />} />
       <Route path="/login" element={<Login />} />
      <Route path="/" element={<Auth />} >
        <Route path="/admin" element={<Admin />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
