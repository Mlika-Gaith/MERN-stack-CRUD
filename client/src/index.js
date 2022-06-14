import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Create from "./components/Create";
import Edit from "./components/Edit";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
