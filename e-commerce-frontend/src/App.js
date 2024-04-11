import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; // Update path if using Components folder (Optional)
import Footer from "./Components/Footer/Footer"; // Update path if using Components folder (Optional)
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import UserTypeSelection from "./Pages/UserTypeSelection";
import SellerRoutes from "./Pages/SellerRoutes";

function App() {
  const userRole = localStorage.getItem('user-role') || 'buyer';

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/user-types" element={<UserTypeSelection />} />
          {userRole === 'seller' && <Route path="/seller" element={<SellerRoutes />} />}
          <Route path="*" element={<Navigate to="/user-types" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
