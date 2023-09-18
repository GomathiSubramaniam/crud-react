import  { useState } from "react";
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function AddUser({user, setUser}){
    const history = useHistory();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [sessionTimings, setSessionTimings] = useState("");

   const addNewUser = () =>{
    const newUser = {
        id,
        name,
        email,
        course,
        sessionTimings
    }
    setUser([...user, newUser])
    setId("");
    setName("");
    setEmail("");
    setCourse("");
    setSessionTimings("");
    history.push('/')
   
   }
    return(
        <BaseApp 
        title={" Add A New User"}>
        <div>
            <input 
            placeholder="id"
          
            value={id}
            onChange={(event) => setId(event.target.value)}
            />
            <input 
            placeholder="name"
            value={name}
          
            onChange={(event) => setName(event.target.value)}
            />
            <input 
            placeholder="email"
            value={email}
           
            onChange={(event) => setEmail(event.target.value)}
            />
            <input 
            placeholder="course"
            value={course}
         
            onChange={(event) => setCourse(event.target.value)}
            />
            <input 
            placeholder="sessionTimings"
            value={sessionTimings}
            onChange={(event) => setSessionTimings(event.target.value)}
            />
            <button
            onClick={addNewUser}
            >Add</button>
    </div>
    </BaseApp>
    )
}