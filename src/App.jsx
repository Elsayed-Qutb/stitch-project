import React from "react";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import AddBaby from "./Pages/AddBaby";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/AddBaby" element={<AddBaby></AddBaby>}></Route>
    </Routes>
  );
}
