import React, { useState } from "react";
import './Booking.css'
import { Link } from "react-router-dom";
import Ticket from "./Ticket";
const Booking=(props)=>{
    const [isavail,setIsavail]=useState(false);
    const isAvail=(e)=>{
        e.preventDefault();
        setIsavail(true);
    }
    return (
        <>
            <h1 style={{padding:'20px',textDecoration:'underline'}}>T-Companion Booking services</h1>
            <div className="container">
                <div>

                <form>
                    <div>
                    <center>
                    FROM<select value={props.from} onChange={(e)=>props.upF(e.target.value)} id="from">
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Kochin">Kochin</option>
                            <option value="Srinagar">Srinagar</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Vizag">Vizag</option>
                            <option value="Patna">Patna</option>
                        </select>
                    </center>
                    </div>
                    <div>
                    <center>
                        TO<select value={props.to} onChange={(e)=>props.upT(e.target.value)} id="to">
                        <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Kochin">Kochin</option>
                            <option value="Srinagar">Srinagar</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Vizag">Vizag</option>
                            <option value="Patna">Patna</option>
                        </select>
                    </center>
                    </div>
                    <div>
                    <center>
                        <input type="datetime-local" placeholder="date" />
                    </center>
                    </div>
                    <div>

                    </div>
                    <center>
                        <input type='submit' onClick={(e)=>isAvail(e)} value="Book Ticket"/>
                        
                    </center>
                    <div>
                        {(isavail)?
                        <h4>
                            <Link to="/ticket">View your Ticket Here</Link>
                        </h4>:''}
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}


export default Booking;