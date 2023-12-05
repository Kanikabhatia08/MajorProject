import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import BirthStones from "./pages/BirthStones";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (<main>
    <div className="bg-slate-900 fixed top-0 w-screen">
      <Navbar />
    </div>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Birthstones" element={<BirthStones />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      
    </Routes>
    <div className="mt-8">
    <Footer />
    </div>
    
    
  </main>)
};

export default App;
