import React from "react";
import Home from "./pages/home";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    );
  }