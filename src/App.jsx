import React,{useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Signin from './Signin';
import Registration from './Registration_page';
import Footer from './Footer';
import NavBar from './NavBar';
import Booking from './Booking'
import Ticket from './Ticket'
const App = ()=>{
  const [from, setFrom] =useState("Hyderabad");
  const [to, setTo] =useState("Bengaluru");
  const updateFrom=(city)=>{
      setFrom(city);
      console.log(city)
  }
  const updateTo=(city)=>{
    setTo(city);
    console.log(city)
  }
    return (
        <>
        <NavBar/> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/booking" element={<Booking from={from} to={to}/>} upF={updateFrom} upT={updateTo}/>
            <Route path="/ticket" element={<Ticket source={from} dest={to} />} />
          </Routes>
        <Footer/>
        </>
      );
    
}
export default App;