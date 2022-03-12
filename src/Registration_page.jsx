import React from "react";
import './Reg.css';
import { Link } from "react-router-dom";
const Registration_page = ()=>{
    return (

        <>
        <section style={{height:'90vh'}}>
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
            <center><button><Link to="/login">Register</Link></button></center>
        </div>
        </form>
        </div>
        </section>
    </>
    )
}

export default Registration_page;