import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AuthProvider from './context/Auth/AuthProvider';
import CategoryPage from './pages/CategoryPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="wrap ">
      <AuthProvider>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='category' element={<CategoryPage/>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
