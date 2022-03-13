import React from "react";
import "./Home.css"
import Tcomp from "./T-comp.png"
import {Link} from 'react-router-dom'
const Home = ()=>{
    return (
        <>
            <div className="BodyCont">
                <h1 style={{padding:'20px',textDecoration:'underline'}} >Welcome to T-Companion </h1>
                <h2 >" Feel like travelling? book your tickets with us "</h2>
            <div>
            <h3>
            <center>CONVENIENCE ON-THE-GO.</center><br/>
Enjoy the following exclusive features on the T-Comapanion Bus Services app
Last Minute Booking - In a hurry to book a bus at the last minute? Choose the bus passing from your nearest boarding point and book in a few easy steps.
Boarding Point Navigation - Never lose your way while travelling to your boarding point!
Comprehensive Ticket Details- Everything that you need to make the travel hassle free - rest stop details, boarding point images, chat with co-passengers, wake-up alarm and much more!
            </h3>
            </div>
            <center><button ><Link to='/booking' style={{fontSize:'1.7em',textDecoration:'none'}}>Book your Ticket</Link></button></center>
                <img className="image" src={Tcomp}></img> 
                
            </div>
            
            
            
        </>
    )
}
export default Home;
