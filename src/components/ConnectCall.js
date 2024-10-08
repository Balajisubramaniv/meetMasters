import React from 'react'
import {useNavigate} from 'react-router-dom'



export const ConnectCall = ()=>{
    const navigate = useNavigate()

    return(
        <button className="connectBtn" onClick={()=>{navigate("/initiateCall")}}>ConnectCall</button>
    )
}