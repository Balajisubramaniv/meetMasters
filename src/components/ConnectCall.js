import React, { useRef } from 'react'
import {useNavigate} from 'react-router-dom'



export const ConnectCall = ()=>{
    const navigate = useNavigate()
    const meetingDetails = useRef("")
    const intiateCallback = (meetingDetails) =>{
        const roomId = meetingDetails.current.children.roomId.value
        const userId = meetingDetails.current.children.userId.value
        const userName = meetingDetails.current.children.userName.value
        navigate("/initiateCall?roomId="+roomId+"&userId="+userId+"&userName="+userName)
    }

    return(
        <div ref={meetingDetails} >
            <input id="roomId" placeholder='Enter Room Id' ></input>
            <input id="userId" placeholder='Enter Room UserId'></input>
            <input id="userName" placeholder='Enter Room User Name' ></input>
            <button className="connectBtn" onClick={()=>{intiateCallback(meetingDetails)}}>ConnectCall</button>
        </div>
    )
}