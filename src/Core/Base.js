import React from 'react';
import{ useHistory } from "react-router-dom";
export default function BaseApp({title,  styles, children}){
    const history = useHistory();
    return(
        <div>
            <div>
            <div className="nav-styles">Students Records
            <div>
                <span>
                    <button className="nav-button" 
                    onClick={()=>history.push("/add/user")}> Add Users </button>
                </span>
                
                <span>
                   <button className="nav-button" 
                    onClick={()=>history.push("/")}> Dashboard </button>
                </span>
                </div>
            </div>
         <div className="title">{title}</div>
         </div>
         <div className="childred">
            {children}
            <footer>
             <p>Copyright © Your Website 2023</p>
         </footer> 
            </div>
         
        </div>
         )
    }