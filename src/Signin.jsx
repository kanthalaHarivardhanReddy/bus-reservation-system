import React from "react";
import './sign.css'
import { Link } from "react-router-dom";

const Signin = ()=>{
    return(
        <>
            <section style={{height:'90vh'}}>
            <h1>Login page</h1>
            <h6>Login to use the services</h6>
            <div className="container" style={{color:"black", fontWeigh:600}}>
                <div class = "box">
                    Email<input type="email" placeholder="abc@xyz.com" name = "email"></input>
                </div>
                <div> 
                    Password<input type="password" placeholder="enter password" name = "pwd"></input>
                </div>
                <div>
                <center><button><Link to="/booking">Login</Link></button></center>
                </div>
            </div>
            </section>
        </>
    )
}
export default Signin;