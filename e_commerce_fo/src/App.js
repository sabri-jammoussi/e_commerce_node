import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList"
import ProductView from "./components/ProductView";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Wrapper to access `useLocation` outside Router
function AppContent() {
  const location = useLocation();
  const hideNavbarPaths = ["/login"]; // Add more paths if needed

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/productView" element={<ProductView />} />

        {/* Add other routes here */}
      </Routes>
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
