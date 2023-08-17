import React from "react";
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react'
import { useState } from "react";

const baseUrl = "https://hqik9jtqxj.execute-api.us-west-2.amazonaws.com/Dev/"
const API_KEY = "9Cbb8AR3De5ZDINOBgxa02ICzOd7az8k8z2DvvCN"

// export const sendSlackCode = async(code, userID) => {
//     console.log("Sending Gateway request")
//     let data = null
//     await fetch(baseUrl + "slack",{
//         method:"POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'x-api-key': API_KEY
//             },
//         body : JSON.stringify({
//             input : JSON.stringify({
//                 code : code,
//                 userID : userID
//             }),
//             name: "ExecutingSlackAuth" + userID,
//             stateMachineArn : "arn:aws:states:us-west-2:618584891789:stateMachine:SlackAuth"
            
//         })
//     }).then(async res => {
//         data = (await res.json())
//         console.log(data)
//     })
//     return data
// }

// todo: create link to google sign in in my office gym
// route to this page to complete setup

export default function GoogleCalendarSetup(props){
    
    const searchParams = new URLSearchParams(document.location.search)
    //const { code } = useParams()
    const { UserID } = props
    
    useEffect(() => {
        //update users exercise for request
        async function processCode(code){
            if(code!== "null" && code !== null && UserID != null){
                // pass to lambda with oauth.access method
                // lambda saves user data and then returns success or fail
                //sendSlackCode(code, UserID)
                console.log("sending data to gateway here")
            }
            
        }
        const code = searchParams.get("code")
        if(code != null && UserID != null){
            processCode(code)
        }else{
            console.log("Missing code or auth", code, UserID)
        }
        
        console.log(code)
        
    },[searchParams, UserID])
    console.log(searchParams.get("code"))
    return(
        <div><p>Google Calendar Integration!</p></div>
    )
}