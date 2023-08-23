import React from "react";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Dashboard from "../components/Dashboard";


 function Allroutes(){
    return (
        <Routes>
            <Route  path="/" 
                element={<Dashboard/>} />
               
           


        </Routes>
    )
 }

 export default Allroutes;