import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { getExerciseLog, getExercisesGPT, getUsersExercise, listExerciseLogs, listExercisesGPTS, listUsersExercises } from './graphql/queries';
import { createUsersExercise } from './graphql/mutations';
import awsExports from './aws-exports';
import { Routes, Route, HashRouter } from 'react-router-dom'; //INSTALL WHEN INTERNET EXISTS
import { useState } from 'react';

// pages
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Help from './pages/Help'
import { useEffect } from 'react';
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

//other
import {BODY_PARTS_DEFAULT_DIFFICULTY} from './bodyParts'

import SlackSetup from './pages/SlackSetup';
import GoogleCalendarSetup from './pages/GoogleCalendarSetup';
import OutlookCalendarSetup from './pages/OutlookCalendarSetup';

Amplify.configure(awsExports);

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function convertLocalToUniversalDate(dateLocal){
  console.log(dateLocal, "date")
  const date = new Date(dateLocal)
  let utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                  date.getUTCDate(), date.getUTCHours(),
                  date.getUTCMinutes(), date.getUTCSeconds());
  return new Date(utc)
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function App({ signOut, user }) {
  const {sub, email} = user.attributes
  // get data if user exists, if not set data and get in same request

  
  
  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState(true)
  const [userPulledData, setUserPulledData] = useState(null)
  const [isHorizontal, setHorizontal] = useState(true)

  const checkHorizontal = () => {
    console.log(window.innerWidth, window.innerHeight)
    return (window.innerHeight < window.innerWidth)
  }
  useEffect(() => {
    async function setupUser(UserID){
      setHorizontal(checkHorizontal())
      console.log("CHECKED HORIZONTAL", checkHorizontal())
      let getUserData = (await getUser(UserID))
      
      let userData = getUserData.data
      let userStatus = getUserData.status
      if(userStatus !== 200){
        alert("Bad connection, please try again")
      }else{
        if(userData === null && userStatus === 200){ //doesn't exist in DB
          const creationData = await createUser(UserID, email)
          console.log(creationData, "creation Data")
          userData = creationData
          //alert("Welcome! Head over to settings if you want to make any changes to the default configuration.")
          
        }
        setUserPulledData(userData)
        console.log(userData, "After setup data")
        
      }
      

      // Difficulty will be stringified!
    }

    if(sub !== null){
      //signOut()
      console.log("running setup", sub, email)
      setupUser(sub)
    }
    console.log(sub, "USE EFFECT")
  },[])

  useEffect(() => {
    if(userPulledData !== null){
      setLoading(false)
    }
  },[userPulledData])
  
  const getUser = async (UUID) => {
    console.log("SEARCHIGN FOR: ", UUID)
    let data = null
    let status = null
    await fetch(awsExports.aws_appsync_graphqlEndpoint, {
      method : 'POST',
      headers: {'Content-Type': 'application/json',
                'x-api-key' : 'da2-l25ddq7nvbghfbdp7imeg36ssi'
              },
      body : JSON.stringify({
        query: getUsersExercise,
        variables: {
          UserID : UUID
        }
      })
    }).then(async res => {
      console.log(res, "user get")
      status = res.status
      if(res.ok){
        data = (await res.json()).data.getUsersExercise
        console.log(data, "user data")
      }
      
    })
    return {data : data, status : status }
  }

  const createUser = async (UUID, email) => {
    console.log("CREATING USER")
    
    const WindowStartLocal = new Date().setHours(10,0)
    const WindowEndLocal = new Date().setHours(16,0)
    const WindowStartUTC = convertLocalToUniversalDate(WindowStartLocal)
    const WindowEndUTC = convertLocalToUniversalDate(WindowEndLocal)
    
    const WindowStartSummed = WindowStartUTC.getUTCHours() * 60 + WindowStartUTC.getUTCMinutes()
    const WindowEndSummed = WindowEndUTC.getUTCHours() * 60 + WindowEndUTC.getUTCMinutes()

    const response = await fetch(awsExports.aws_appsync_graphqlEndpoint, {
      method : 'POST',
      headers: {'Content-Type': 'application/json',
                'x-api-key' : 'da2-l25ddq7nvbghfbdp7imeg36ssi'
              },
      body : JSON.stringify({
        query: createUsersExercise,
        variables: {
          input: {
            UserID : UUID,
            BodyPosition : "Standing",
            Difficulty : BODY_PARTS_DEFAULT_DIFFICULTY, 
            Email : email,
            ExerciseInterval : 90,
            IgnoreExercises : [],
            LastExerciseTime : 0,
            Location : "office",
            PrevExercise: "none",
            SkippedExercises: [],
            DeliveryMethod: "EMAIL",
            WindowStartHour: WindowStartSummed,
            WindowEndHour: WindowEndSummed,
            WindowDays: [false, true,true,true,true,true,false], //Weekdays only
            RequestedExercise: false,
            Movement: "EXERCISE"
          } 
        }
      })
    })//.then(async res => {
    //   data = await res.json()
    //   console.log(data, "Creation call data")

    //   //[{"key" : "Latissimus dorsi", "value" : "EASY"}, {"key" : "Quadriceps", "value" : "EASY"}],
    // })
    const jsonData = await response.json()
    return jsonData.data.createUsersExercise
    // console.log(jsonData, "Data before ok check create user")
    // if(jsonData.ok){
    //   return {data : jsonData.data.createUsersExercise, status : jsonData.status }
    // }else{
    //   return {data : null, status : jsonData.status }
    // }
    
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  
if(loading){
  return(
    <Box>
      <h4>Loading...</h4>
      <p>Retrieving data.</p>
    </Box>
  ) 
}
else{

  console.log(userPulledData, "DATA BEING SENT")
  return (
    <Routes>
      <Route path='/' element={<Box sx= {{width : '100%'}}>
        <Box sx={{borderBottom : 1, borderColor: 'divider'}}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="Dashboard" {...a11yProps(0)}
              />
            <Tab label="Settings" {...a11yProps(0)}
              />
            <Tab label="Help" {...a11yProps(0)}
              />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Dashboard data={userPulledData} horizontal = {isHorizontal}/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Settings data={userPulledData} horizontal = {isHorizontal}/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Help data={userPulledData} horizontal = {isHorizontal}/>
          </CustomTabPanel>
        </Box>
          {/* <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='Settings' element={<Settings/>}></Route>
        </Routes> */}
      </Box>}
      />
      <Route path='slacksetup' element={<SlackSetup UserID = {sub}/>}></Route>
      <Route path='googlecalendarsetup' element={<GoogleCalendarSetup UserID = {sub}/>}></Route>
      <Route path='outlookcalendarsetup' element={<OutlookCalendarSetup UserID = {sub}/>}></Route>
    </Routes>
  );
}
}
//export default App

export default withAuthenticator(App);