import React from 'react'
import { useNavigate } from 'react-router-dom';
import './DemographicForm.css';

function Success(){

    const navigate = useNavigate();


    return(
        <div>

            <h1> Successfully Logged In</h1>
            <button type="logout" onClick={()=> navigate("/")}>Logout</button>
        </div>
    )


}

export default Success;