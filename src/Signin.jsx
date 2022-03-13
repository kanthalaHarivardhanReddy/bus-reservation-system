import React from "react";
import './sign.css'
import { Link } from "react-router-dom";

const Signin = ()=>{
    return(
        <>
            <section style={{height:'90vh'}}>
            <h1 style={{padding:'20px',textDecoration:'underline'}} >Login page</h1>
            <center><h3 style={{color:'grey'}}>Login to use the services</h3></center>
            <div className="container" style={{color:"black", fontWeigh:600 }}>
                <div class = "box">
                    Email<input type="email" placeholder="abc@xyz.com" name = "email"></input>
                </div>
                <div> 
                    Password<input type="password" placeholder="enter password" name = "pwd"></input>
                </div>
                <div>
                <center><button><Link to="/booking" style={{textDecoration:'none'}}>Login</Link></button></center>
                </div>
            </div>
            </section>
        </>
    )
}
export default Signin;