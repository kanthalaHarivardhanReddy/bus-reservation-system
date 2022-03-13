import React, { useState } from "react";
import './sign.css'
import { Link } from "react-router-dom";

const Payment = ()=>{
    const [pay,setPay] = useState(false);
    const update=(e)=>{
        e.preventDefault();
        setPay(true);
    }
    return(
        <>
            <section style={{height:'90vh'}}>
            <form>
            <h1 style={{padding:'20px',textDecoration:'underline'}} >Payment Gateway</h1>
            <center><h2 style={{color:'grey'}}>Please, pay 400INR to book your ticket </h2></center>
            <div className="container" style={{color:"black", fontWeight:600 }}>
                <div className= "box">
                    Card number <input type="text" placeholder="6748 9875 8975 5623" name = "cardno"/>
                </div>
                <div> 
                    CVV <input type="text" placeholder="enter CVV " name = "cvv"/>
                </div>
                <div> 
                    Expiry Date <input type="date"  name = "date"/>
                </div>
                <div>
                <center >
                    <input style={{backgroundColor:'green',cursor:'pointer'}} type="submit" value="PAY" onClick={(e)=>{update(e)}} />    
                </center>
                </div>
                {(pay)?<div>
                <center>
                    <h3 style={{color:'green',padding:'5px'}}>Payment is Successful!</h3>
                    <button><Link to="/ticket" style={{textDecoration:'none'}}>View your ticket here</Link></button></center>
                </div>:
                ''}
            </div>
            </form>
            </section>
        </>
    )
}
export default Payment;