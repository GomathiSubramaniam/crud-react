import React from "react";
import BaseApp from "../Core/Base";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function UserDetails({user}) {
    const {id} = useParams();
    const person= user[id];
    return (
        <BaseApp
            title={"User Details"}>
            <div className="user-content">

                <table>
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>SessionTimings</th>

                        </tr>
                    </thead>
                    <tbody>


                        <tr>

                           <td>{person.id}</td>            
                           <td>{person.name}</td>
                           <td>{person.email}</td>
                           <td>{person.course}</td>
                           <td>{person.sessionTimings}</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </BaseApp>
    )
}