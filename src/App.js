import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/auth/AuthProvider";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProductDisplay from "./pages/ProductDisplay";
import Register from "./pages/Register";
import { CartProvider } from "./context/cart/CartContext.jsx";
import MissingPage from "./pages/MissingPage";
import Checkout from "./pages/Checkout";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="wrap ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route element={<PublicRoutes/>}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            </Route>
            <Route path=":category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDisplay />} />
            <Route path="cart" element={<Cart />} />
            <Route element={<PrivateRoutes />}>
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="*" element={<MissingPage />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
