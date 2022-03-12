import React from "react";
import "./Home.css"
import Tcomp from "./T-comp.png"
import NavBar from "./NavBar"
const Home = ()=>{
    return (
        <>
            
           <NavBar/> 
            <div className="BodyCont">
                <img className="image" src={Tcomp}></img> 
                
            </div>
            <footer className = "FootCont">

            </footer>
            
            
        </>
    )
}
export default Home;
