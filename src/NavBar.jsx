import React from "react";
import "./NavBar.css"
const NavBar= () =>{
return(
    <>
    <nav>
                <div class = "NavContainer">
                    <div id="one">
                    <a class="Name" href="App.jsx"><h3>T-Companion</h3></a>
                    </div>
                    <div id = "two">
                        <a class="Button" href="Signin.jsx"><p>Sign in</p></a>
                    </div>
                    <div id = "three"> 
                        <a class="Button" href="RegistrationPage.jsx"><p>Sign up</p></a>
                    </div>
                </div>

            </nav>
    </>
)
}
export default NavBar;