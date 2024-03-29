import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
const NavBar= () =>{
return(
    <>
    <nav>
                <div className = "NavContainer">
                    <div id="one">
                    <Link className="Name" to="/"><h3>T-Companion</h3></Link>
                    </div>
                    <div id = "two">
                        <Link className="Button" to="/login"><h4>Login</h4></Link>
                    </div>
                    <div id = "three"> 
                        <Link className="Button" to='/register'><h4>Register</h4></Link>
                    </div>
                    <div id = "three"> 
                        <Link className="Button" to='/aboutus'><h4>About Us</h4></Link>
                    </div>
                </div>

            </nav>
    </>
)
}
export default NavBar;