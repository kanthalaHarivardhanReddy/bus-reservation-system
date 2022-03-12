import React from "react";
import './Booking.css'

const Ticket=(props)=>{
    const style={
        backgroundColor:'white',
        display:'flex',
        width:'80vw',
        margin:'auto',
        height:'40vh',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'20px'
    }
    const h3style={
        margin:'2%',
        padding:'5px'
    }
    return (
        <>
            <h1>Your Ticket is Successfully booked</h1>
            <div className="ticket" style={style}>
                <center>
                    <h3>T-Companion</h3>
                    <hr/>
                    {Date(Date.now()).toString()} 
                    <h3 style={h3style}>Source: {props.source}</h3>
                    <h3 style={h3style}>Destination: {props.dest}</h3>
                    <h5 style={h3style}>your ticket is booked</h5>
                </center>
            </div>
        </>
    )
}


export default Ticket;