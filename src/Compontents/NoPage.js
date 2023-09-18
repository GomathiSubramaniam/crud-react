import React from "react";
import { useHistory } from "react-router-dom";

export default function Nopage(){
    const history = useHistory()
    return(
        <div>
            <h1>Hi you entered worng place 404</h1>
            <button className="worng-btn" 
            onClick={()=>history.push("/")}>
                Dashboard
            </button>
        </div>
    )
}