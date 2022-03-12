import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
const NavBar= () =>{
return(
    <>
    <nav>
                <div class = "NavContainer">
                    <div id="one">
                    <Link class="Name" to="/"><h3>T-Companion</h3></Link>
                    </div>
                    <div id = "two">
                        <Link class="Button" to="/login"><h4>Sign in</h4></Link>
                    </div>
                    <div id = "three"> 
                        <Link class="Button" to='/register'><h4>Sign up</h4></Link>
                    </div>
                </div>

            </nav>
    </>
)
}
export default NavBar;