import React from "react";
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const baseUrl = "https://hqik9jtqxj.execute-api.us-west-2.amazonaws.com/Dev/"
const API_KEY = "9Cbb8AR3De5ZDINOBgxa02ICzOd7az8k8z2DvvCN"

//const GOOGLE_OPENID_URL = "https://oauth2.googleapis.com/token" //"https://oauth2.googleapis.com/connect/token"

export const sendGoogleCode = async(code, userID) => {
    console.log("Sending Gateway request")
    let data = null
    await fetch(baseUrl + "gcalendar",{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
            },
        body : JSON.stringify({
            input : JSON.stringify({
                code : code,
                userID : userID
            }),
            name: "ExecutingGoogleAuth" + userID,
            stateMachineArn : "arn:aws:states:us-west-2:618584891789:stateMachine:GoogleCalendarAuth"
            
        })
    }).then(async res => {
        data = (await res.json())
        console.log(data)
    })
    return data
}
// todo: create link to google sign in in my office gym
// route to this page to complete setup

export default function GoogleCalendarSetup(props){
    const [success, setSuccess] = useState("")

    const navigate = useNavigate()
    
    const searchParams = new URLSearchParams(document.location.search)
    //const { code } = useParams()
    const { UserID } = props
    
    useEffect(() => {
        //update users exercise for request
        async function processCode(code){
            if(code!== "null" && code !== null && UserID != null){
                //get refresh token
                const gRes = await sendGoogleCode(code, UserID)
                console.log(gRes)
                setSuccess("Success!")
                navigate('/')

                // pass to lambda with oauth.access method
                // lambda saves user data and then returns success or fail
                //sendSlackCode(code, UserID)
                
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
        <div>
            <p>Google Calendar Integration...{success}</p>
            {success != "" ? 
            <div>
                <p>You should be redirected soon, if not click below</p>
                <button style={{display: "inline-block", borderRadius: "500px", lineHeight: "1", fontSize: "14px", height: "38px"}} onClick={() => navigate('/')}>MyOfficeGym</button>
            </div>
                    :
                null
            }
        </div>
    )
}

