import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import LivingRoom from "./Route/LivingRoom/LivingRoom";
import BedRoom from "./Route/BedRoom/BedRoom";
import Kitchen from "./Route/Kitchen/Kitchen";
import ProductDetails from "./Route/Products/ProductDetails";
import Loader from "./components/Layout/Loader"; // Import the Loader component

const App = () => {
  const [loading, setLoading] = useState(false); // State for loading
  const location = useLocation(); // Get current location for route tracking

  useEffect(() => {
    setLoading(true); // Show loader on route change
    setTimeout(() => {
      setLoading(false); // Hide loader after 1 second (simulate loading)
    }, 1000); // You can adjust the delay as per your needs
  }, [location]); // Trigger effect on route change

  return (
    <>
      {/* Show loader if loading is true */}
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/living-room" element={<LivingRoom />} />
        <Route path="/bedroom" element={<BedRoom />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        toastStyle={{
          backgroundColor: "#4CAF50", // green
          color: "white",
        }}
      />
    </>
  );
};

export default App;
