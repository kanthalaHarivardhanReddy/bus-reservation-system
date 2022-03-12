import React from "react";
import NavBar from "./NavBar";
const Signin = ()=>{
    return(
        <>
            <NavBar/> 
            
            <div className="MainCont">
                <h2>Login page</h2>
                <div class = "box">
                    Email<input type="email" value = "abc@xyz.com" name = "email"></input>
                </div>
                <div> 
                    Password<input type="password" name = "pwd"></input>
                </div>
            </div>
           
        </>
    )
}
export default Signin;