import React from "react";
import "./Home.css"
import Tcomp from "./T-comp.png"
const Home = ()=>{
    return (
        <>
            
           
            <div className="BodyCont">
                <h1>Welcome to T-Companion </h1>
                <h2>" Feel like travelling, book your tickets with us "</h2>
            <div>
            <h3>
            <center>CONVENIENCE ON-THE-GO.</center><br/>
Enjoy the following exclusive features on the redBus app
Last Minute Booking - In a hurry to book a bus at the last minute? Choose the bus passing from your nearest boarding point and book in a few easy steps.
Boarding Point Navigation - Never lose your way while travelling to your boarding point!
Comprehensive Ticket Details- Everything that you need to make the travel hassle free - rest stop details, boarding point images, chat with co-passengers, wake-up alarm and much more!
Enter your mobile number below to download the redBus mobile app.
            </h3>
            </div>
                <img className="image" src={Tcomp}></img> 
                
            </div>
            
            
            
        </>
    )
}
export default Home;
