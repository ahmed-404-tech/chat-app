import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import BottomTabBar from "./components/BottomTabBar";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="relative flex flex-col">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route index path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomTabBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
