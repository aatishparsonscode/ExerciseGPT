import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { getExerciseLog, getExercisesGPT, getUsersExercise, listExerciseLogs, listExercisesGPTS, listUsersExercises } from './graphql/queries';
import { createUsersExercise } from './graphql/mutations';
import awsExports from './aws-exports';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; //INSTALL WHEN INTERNET EXISTS
import { useState } from 'react';

// pages
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import { useEffect } from 'react';
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

//other
import {BODY_PARTS_DEFAULT_DIFFICULTY} from './bodyParts'

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
      let userData = (await getUser(UserID))
      if(userData === null){ //doesn't exist in DB
        const creationData = await createUser(UserID, email)
        userData = creationData
        alert("Welcome! Head over to settings if you want to make any changes to the default configuration.")
      }
      setUserPulledData(userData)
      console.log(userData, "After setup data")

      // Difficulty will be stringified!
    }
    if(sub !== null){
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
      data = (await res.json()).data.getUsersExercise
      console.log(data, "user data")
    })
    return data
  }

  const createUser = async (UUID, email) => {
    console.log("CREATING USER")
    let data = null
    const WindowStartLocal = new Date().setHours(10,0)
    const WindowEndLocal = new Date().setHours(16,0)
    const WindowStartUTC = convertLocalToUniversalDate(WindowStartLocal)
    const WindowEndUTC = convertLocalToUniversalDate(WindowEndLocal)
    
    const WindowStartSummed = WindowStartUTC.getUTCHours() * 60 + WindowStartUTC.getUTCMinutes()
    const WindowEndSummed = WindowEndUTC.getUTCHours() * 60 + WindowEndUTC.getUTCMinutes()

    await fetch(awsExports.aws_appsync_graphqlEndpoint, {
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
            ExerciseInterval : 45,
            IgnoreExercises : [],
            LastExerciseTime : 0,
            Location : "office",
            PrevExercise: "none",
            SkippedExercises: [],
            DeliveryMethod: "EMAIL",
            WindowStartHour: WindowStartSummed,
            WindowEndHour: WindowEndSummed,
            WindowDays: [false, true,true,true,true,true,false] //Weekdays only
          } 
        }
      })
    }).then(async res => {
      data = await res.json()
      //[{"key" : "Latissimus dorsi", "value" : "EASY"}, {"key" : "Quadriceps", "value" : "EASY"}],
    })
    return data.data.createUsersExercise
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const graphCall = async () => {
    await fetch(awsExports.aws_appsync_graphqlEndpoint, {
      method : 'POST',
      headers: {'Content-Type': 'application/json',
                'x-api-key' : 'da2-l25ddq7nvbghfbdp7imeg36ssi'
              },
      body : JSON.stringify({
        query: listUsersExercises,
        // variables: {
        //   UserID : "abcde"
        // }
      })
    }).then(async res => {
      const data = res.json()
      console.log(data)
    })
  }

  const graphCallList = async () => {
    await fetch(awsExports.aws_appsync_graphqlEndpoint, {
      method : 'POST',
      headers: {'Content-Type': 'application/json',
                'x-api-key' : 'da2-l25ddq7nvbghfbdp7imeg36ssi'
              },
      body : JSON.stringify({
        query: listExerciseLogs,
        // variables: {
        //   UserID : "abcde",
        //   timestamp : 1689288107105
        // }
      })
    }).then(async res => {
      const data = res.json()
      console.log(data)
    })
  }

  const graphMutationUser = async () => {
    await fetch(awsExports.aws_appsync_graphqlEndpoint, {
      method : 'POST',
      headers: {'Content-Type': 'application/json',
                'x-api-key' : 'da2-l25ddq7nvbghfbdp7imeg36ssi'
              },
      body : JSON.stringify({
        query: createUsersExercise,
        variables: {
          input: {
            UserID : "abcdefg"
          } 
        }
      })
    }).then(async res => {
      const data = res.json()
      console.log(data)
    })
  }
  // useEffect(() => {
  //   graphCall()
  //   graphCallList()
  //   graphMutationUser()
  // },[])
if(loading){
  return <p>Loading...</p>
}
else{

  console.log(userPulledData, "DATA BEING SENT")
  return (
    <Box sx= {{width : '100%'}}>
      <Box sx={{borderBottom : 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Dashboard" {...a11yProps(0)}
            />
          <Tab label="Settings" {...a11yProps(0)}
            />
          {/* <Tab label="Payments" {...a11yProps(0)}
            /> */}
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Dashboard data={userPulledData} horizontal = {isHorizontal}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Settings data={userPulledData} horizontal = {isHorizontal}/>
        </CustomTabPanel>
      </Box>
        {/* <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='Settings' element={<Settings/>}></Route>
      </Routes> */}
    </Box>
  );
}
}
//export default App

export default withAuthenticator(App);