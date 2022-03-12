import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Signin from './Signin';
import Registration from './Registration_page';
import Footer from './Footer';
import NavBar from './NavBar';
import Booking from './Booking'
const App = ()=>{
    return (
        <>
        <NavBar/> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        <Footer/>
        </>
      );
    
}
export default App;