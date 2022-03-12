import React from "react";
import './Reg.css';

const Registration_page = ()=>{
    return (

        <>
        <h1><center><i>REGISTRATION PAGE</i></center></h1>

        <div className="container">
        <form>
        <div >
           First Name: <input type="text" placeholder="Firstname"></input>
           </div>
           <div>
            Middle Name:<input type="text" placeholder="Middlename"></input>
            </div>
            <div>
            Last Name:<input type="text" placeholder="Lastname"></input>
        </div>
        <div>
            Email:
            <input type="text" placeholder="name@gamil.com"/>
        </div>
        <div>
           Password: <input type="password" placeholder="enter paasword"></input>
        </div>
        <div>
        ConfirmPassword:<input type="password" placeholder="Re-enterpassword"></input>
        </div>
        <div>
            Contact Number:<input type="text" placeholder=" Enter Mobile Number"></input>
        </div>
        
        <div className="register">
            <center><button>Register</button></center>
        </div>
        </form>
        </div>
        </>
    )
}

export default Registration_page;