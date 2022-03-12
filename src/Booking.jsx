import React, { useState } from "react";
import './Booking.css'

const Booking=()=>{
    const [from, setFrom] =useState("Hyderabad");
    const [to, setTo] =useState("Bengaluru");
    const [d,setd] = useState('12-03-2022 17:44');
    const [isavail,setIsavail] = useState(false);
    return (
        <>
            <h1>T-Companion Booking services</h1>
            <div className="container">
                <div>

                <form>
                    <div>
                    FROM<select value={from} onChange={(e)=>setFrom(e.target.value)} id="from">
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
                    </div>
                    <div>
                        TO<select value={to} onChange={(e)=>setTo(e.target.value)} id="to">
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
                    </div>
                    <div>
                        <input onChange={(e)=>setd(e.target.value)} type="datetime-local" placeholder="date" />
                    </div>
                    <div>

                    </div>
                    <button onClick={setIsavail(from!==to)} >check availability</button>
                    {
                        (isavail)?
                        <div style={{backgroundColor:"green"}}>Available</div>:
                        <div style={{backgroundColor:"red"}}>Not Available</div>
                    }
                </form>
                </div>
            </div>
        </>
    )
}


export default Booking;