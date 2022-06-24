import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AuthProvider from './context/auth/AuthProvider';
import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProductDisplay from './pages/ProductDisplay';
import Register from './pages/Register';
import {CartProvider} from './context/cart/CartContext.jsx'

function App() {
  return ( <AuthProvider>
    <CartProvider>
    <div className="wrap ">
 
       <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path=':category' element={<CategoryPage/>}/>
        <Route path='/product/:id' element={<ProductDisplay/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
