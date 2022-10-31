import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import Login from "./components/Login";
export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
