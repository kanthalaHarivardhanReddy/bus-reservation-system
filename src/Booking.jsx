import React from "react";
import './Booking.css'

const Booking=()=>{
    return (
        <>
            <h1>T-Companion Booking services</h1>
            <div className="container">
                <div>

                <form>
                    <div>
                    FROM<select id="from">
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Bengaluru">Bengaluru</option>
                        </select>
                    </div>
                    <div>
                        TO<select id="to">
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Gandinagar" >Gandinagar</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Bengaluru">Bengaluru</option>
                        </select>
                    </div>
                    <div>
                        <input type="datetime-local" placeholder="date" />
                    </div>
                    <div>

                    </div>
                    <button>check availability</button>
                </form>
                </div>
            </div>
        </>
    )
}


export default Booking;