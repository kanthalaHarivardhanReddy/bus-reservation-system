import React from "react";
import './sign.css'
const Signin = ()=>{
    return(
        <>
            
            <h1>Login page</h1>
            <div className="container" style={{color:"black", fontWeigh:600}}>
                <div class = "box">
                    Email<input type="email" placeholder="abc@xyz.com" name = "email"></input>
                </div>
                <div> 
                    Password<input type="password" placeholder="enter password" name = "pwd"></input>
                </div>
                <div>
                    <><button>Login</button></>
                </div>
            </div>
           
        </>
    )
}
export default Signin;