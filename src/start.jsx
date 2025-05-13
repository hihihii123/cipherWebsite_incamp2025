import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router";
export default function StartPage() {
    const [answer, setAnswer] = useState("")
    const location = useLocation();
    const navigate = useNavigate();
    const { toShow, name, cipherText } = location.state || {}
    function check() {
        if (answer === cipherText) {
            navigate("/successyippee/groupn")
        } 
        else {
            alert("wrong ;-;")
        }
    }
    return(
        <>
          
            <div>Your Cipher:</div>
            <p>{toShow}</p>
            <p>Name: {name}</p>
            <input value={answer} onChange={e => setAnswer(e.target.value)} />
            <button onClick={check}>Submit</button>
        </>
    );
}