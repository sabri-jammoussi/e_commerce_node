import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductView from "./components/ProductView";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Wrapper to access `useLocation` outside Router
function AppContent() {
  const location = useLocation();
  const hideAllComponentsPaths = ["/login"]; // Paths where all components except Login should be hidden

  // Check if the current path is in hideAllComponentsPaths
  const shouldHideComponents = hideAllComponentsPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideComponents && <Navbar />}
      {!shouldHideComponents && <Home />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/productView" element={<ProductView />} />
        {/* Add other routes here */}
      </Routes>
      {!shouldHideComponents && <Footer />}
     
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;