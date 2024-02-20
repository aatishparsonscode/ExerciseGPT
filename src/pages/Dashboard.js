import * as React from 'react';
import { PureComponent } from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TablePagination from '@mui/material/TablePagination';
import CardMedia from '@mui/material/CardMedia'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Sector, Line, PieChart,Pie, Cell } from 'recharts';

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { listExerciseLog } from '../fakeData'
import awsExports from '../aws-exports';
import { listExerciseLogs } from '../graphql/queries';
import { updateUsersExercise } from '../graphql/mutations';

import logo from '../assets/logo.png'

const baseUrl = "https://hqik9jtqxj.execute-api.us-west-2.amazonaws.com/Dev/"
const API_KEY = "9Cbb8AR3De5ZDINOBgxa02ICzOd7az8k8z2DvvCN"

const EXERCISES_TO_PULL = 40

const fakeExerciseLog =     ["bicep","tricep","trapezius"]

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function createData({exerciseName, timestamp, completed}){
    const dateObj = new Date(timestamp)
    const dateLocal = dateObj.toLocaleTimeString(undefined, {timeStyle:'short'}) + " " + dateObj.toLocaleDateString()
    return {exerciseName, dateLocal, completed}
}


const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

export default function Dashboard(props){
    const { UserID, ExerciseInterval, LastExerciseTime, WindowStartHour, WindowEndHour,WindowDays } = props.data

    const  horizontal  = props.horizontal

    const [exerciseLogs, setExerciseLogs] = useState([])
    const [skippedBodyParts, setSkippedBodyParts] = useState([])

    const [gData, setGData] = useState([])

    const [freeBusyData, setFreeBusyData] = useState([])
    const [freeBusyDataOutlook, setFreeBusyDataOutlook] = useState([])
    const [summary, setSummary] = useState({})
   

    const removeTime = (date) => {
        if(date == undefined){
            return undefined
        }
        return date.split("M ")[1].slice(0, -5)
    }

    const constructGraphData = (data) => {
        let formatted = new Map()
        const dateOnly = data[0]['dateLocal'].split("PM ")[1]
        let accumulated = 0
        for(let obj in data){
            const dateVal = removeTime(data[obj]['dateLocal'])
            let toAdd = 0
            if(data[obj]['completed']){
                toAdd = 1
            }
            accumulated += toAdd
            if(dateVal != undefined){
                formatted.set(dateVal, formatted.has(dateVal) ? formatted.get(dateVal) + toAdd : toAdd)
            }
            
            
        }
        let res = []
        for (const [key, value] of formatted.entries()) {
            res.push({name : key, Aggregate : accumulated, Completed: value})
            accumulated = accumulated - value
            
        }
        return res.reverse()
    }
    

    const navigate = useNavigate()

    useEffect(() => {
        // retrieve latest logs here
        async function setup(){
            console.log(UserID, "Setup UserID in Dashboard")
            const logs = await getExerciseLogs()
            const stats = await getUserSummary()
            setExerciseLogs(logs)
            setSummary(stats)
            setGData(constructGraphData(logs))
            let dataFB = await getFreeBusy(UserID)
            let dataFBOutlook = await getFreeBusyOutlook(UserID)
            setFreeBusyData(dataFB)
            setFreeBusyDataOutlook(dataFBOutlook)
        }
        if(UserID !== null && UserID !== undefined){
            setup()
        }
        
        setSkippedBodyParts(fakeExerciseLog)
    },[UserID])

    const getTimeToNextExercise = () => {
        const intervalMs = 60000 * ExerciseInterval
        const now = new Date().getTime()
        const timeLeft = intervalMs - (now - LastExerciseTime)
        const res =  Math.floor(timeLeft/60000)
        if(res < 0){
            return 1
        }else{
            return res
        }
    }

    const getTimeToLastExercise = () => {
        if(LastExerciseTime < 100){
            return ""
        }
        const now = new Date().getTime()
        const diffMilli = now - LastExerciseTime
        const res = Math.floor(diffMilli/60000) //mins
        const hours = Math.floor(res/60)
        const mins = res % 60
        if(hours > 0){
            return "Time since last movement: " + hours + " hour(s) " + mins + " minutes"
        }else{
            return "Time since last movement: " + mins + " minutes"
        }
    }

    const getUserSummary = async () => {
        let data = null
        await fetch(baseUrl + "userdata?userID=" + UserID,{
            method:"GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': API_KEY
                }
        }).then(async res => {
            data = (await res.json())
            console.log(data)
        })
        return data
    }

    const getExerciseLogs = async () => {
        let data = []
        let rows = []
        const currDate = new Date().valueOf() 
        const oneWeekInMilli = 604800000
        const oneDayInMilli = 86400000 
        const before = currDate - oneDayInMilli/3
        await fetch(awsExports.aws_appsync_graphqlEndpoint, {
            method : 'POST',
            headers: {'Content-Type': 'application/json',
                      'x-api-key' : 'da2-l25ddq7nvbghfbdp7imeg36ssi'
                    },
            body : JSON.stringify({
              query: listExerciseLogs,
              variables: {
                    UserID: UserID,
                    filter : {
                        UserID : {"eq" : UserID}
                    },
                    limit : EXERCISES_TO_PULL
                    //timestamp: {between: [before, currDate]}
                
              }
            })
          }).then(async res => {
            const response = (await res.json())
            console.log(response)
            let data = response.data.listExerciseLogs.items
            for(var i = 0; i < data.length; i++){
                rows.push(createData(data[i]))
            }//data coming in backward
          })

        
        
        
        return rows

    }

    const getSkippedBodyParts = () => {
        //TODO
    }

    const convertDBtimeToDate = (hourMins) => {
        const UTCHours = Math.floor(hourMins / 60)
        const UTCMins = hourMins - UTCHours * 60
        let dateVal = new Date()
        dateVal.setUTCHours(UTCHours)
        dateVal.setUTCMinutes(UTCMins)
        console.log("Date VAl" , dateVal)
        const res =  new Date(dateVal)
        return dayjs(res)
        
    }

    const requestExerciseEarly = async () => {
        await fetch(awsExports.aws_appsync_graphqlEndpoint, {
            method : 'POST',
            headers: {'Content-Type': 'application/json',
                      'x-api-key' : 'da2-l25ddq7nvbghfbdp7imeg36ssi'
                    },
            body : JSON.stringify({
              query: updateUsersExercise,
              variables: {
                input : {
                    UserID : UserID,
                    RequestedExercise: true
                }
              }
            })
          }).then(async res => {
            const data = res.json()
            console.log(data)
            alert("Requested! Your next exercise should arrive within 60 seconds")
          })
        console.log("Requesting early exercise")
    }

    const checkIfDayIncluded = () => {
        const day = new Date().getDay()
        const dayIncluded = WindowDays[day]
        if(dayIncluded){
            return "Active Today"
        }else{
            return "Inactive Today"
        }
    }

   

    const getFreeBusy = async (UserID) => {
        let result = []
        await fetch('https://hqik9jtqxj.execute-api.us-west-2.amazonaws.com/Dev/gcalendarsync?userID=' + UserID, {
            method : 'GET',
            headers: {'Content-Type': 'application/json',
                      'x-api-key' : '9Cbb8AR3De5ZDINOBgxa02ICzOd7az8k8z2DvvCN',
                      'Accept': 'application/json'
                    }
            
          }).then(async res => {
            try{
                result = (await res.json()).freeBusyBlocks
            }catch(e){
                console.log("Could not retrieve free busy")
            }
            
            
          })
          console.log(result)
          return result
    }

    const getFreeBusyOutlook = async (UserID) => {
        let result = []
        await fetch('https://hqik9jtqxj.execute-api.us-west-2.amazonaws.com/Dev/ocalendarsync?userID=' + UserID, {
            method : 'GET',
            headers: {'Content-Type': 'application/json',
                      'x-api-key' : '9Cbb8AR3De5ZDINOBgxa02ICzOd7az8k8z2DvvCN',
                      'Accept': 'application/json'
                    }
            
          }).then(async res => {
            try{
                result = (await res.json()).freeBusyBlocks
            }catch(e){
                console.log("Could not retrieve free busy")
            }
            
            
          })
          console.log(result)
          return result
    }

    const translateUTCtoComponent = (blocks) => {
        return (blocks.map(block => {
            <Typography>
                {block.start} hello
            </Typography>
        })
        )
    }

    
    console.log("IS HORIZONTAL", horizontal)
    return(
        <Box>
            <Grid container spacing={2} columnSpacing={5} direction = {horizontal ? "row" : 'column-reverse'}>
                <Grid item xs={6} >
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer  >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Movement Log
                            </Typography>
                        </CardContent>
                        
                        <Table  stickyHeader aria-label="Exercise Logs">
                            <TableHead>
                                <TableCell>Movement</TableCell>
                                <TableCell align="right">Date</TableCell>
                            </TableHead>
                            <TableBody>
                                {exerciseLogs.map((row) => (
                                    <TableRow key={row.dateLocal} 
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" style={{color :row.completed ?  "#1565C0" : null}}>
                                    {row.exerciseName}
                                </TableCell>
                                <TableCell align="right" style={{color :row.completed ?  "#1565C0" : null}}>{row.dateLocal}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Paper>
                </Grid>
                <Grid xs={5} item >
                   
                        <Card>
                            <CardContent>
                                
                                <Typography variant="h6" component="div">
                                    Your last {EXERCISES_TO_PULL} movements
                                </Typography>
                                <ResponsiveContainer width={'100%'} height={window.innerHeight * 0.25}>
                                    <AreaChart
                                    width={'100%'}
                                    height={window.innerHeight * 0.25 - 50}
                                    data={gData}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis label={{ value: '# Movements', angle: -90, position: 'insideLeft' }}
                                     type="number" //domain={[0, EXERCISES_TO_PULL]}
                                    />
                                    <Tooltip />
                                   
                                    
                                    <Area type="monotone" dataKey="Aggregate" stroke="#1565C0" fill="#2196f3" />
                                    <Area type="monotone" dataKey="Completed" stroke="#1565C0" fill="#2196f3" />
                                    </AreaChart>
                                </ResponsiveContainer>
                                {/* <PieChart width={400} height={400}>
                                    <Pie
                                    data={data}
                                    cx={120}
                                    cy={200}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    >
                                    {data.map((entry, index) => (
                                        <Cell display={<text color='black'>hi</text>} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                    </Pie>
                                    
                                </PieChart> */}
                                    
                            </CardContent>
                            <CardContent>
                                
                                <Typography variant="h5" component="div">
                                    Need a break?
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" onClick={() => requestExerciseEarly()}>
                                    <Typography variant="h7" component="div">
                                    Request Your Next Movement
                                    </Typography>
                                </Button>
                                
                            </CardActions>
                            
                            <CardContent>
                                <Typography variant="h7" component="div">
                                    Movement Schedule - {checkIfDayIncluded()}
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['TimePicker']}>
                                        <TimePicker value={convertDBtimeToDate(WindowStartHour)} readOnly label="Start Receiving" />
                                        <TimePicker value={convertDBtimeToDate(WindowEndHour)} readOnly label="End Receiving" />
                                    </DemoContainer>
                                </LocalizationProvider>
                                <Typography variant="h7" component="div">
                                    {getTimeToLastExercise()}
                                </Typography>

                            </CardContent>
                            <CardContent>
                                <Typography>
                                    Your Busy Times
                                </Typography>
                                <Typography>
                                    {freeBusyData.map(block => (
                                        <Typography>
                                          
                                            {new Date(block.start).toLocaleDateString([], {month: 'long', day: 'numeric'}) +", " + new Date(block.start).toLocaleTimeString([], {timeStyle: 'short'}) + " - " + new Date(block.end).toLocaleTimeString([], {timeStyle:'short'})}
                                            
                                        </Typography>
                                    ))}
                                </Typography>
                                <Typography>
                                    {freeBusyDataOutlook.map(block => (
                                        <Typography>
                                          
                                            {new Date(block.start).toLocaleDateString([], {month: 'long', day: 'numeric'}) +", " + new Date(block.start).toLocaleTimeString([], {timeStyle: 'short'}) + " - " + new Date(block.end).toLocaleTimeString([], {timeStyle:'short'})}
                                            
                                        </Typography>
                                    ))}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Button variant="contained" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeS7TypPDTjeniHjAQ8uWqlNKrLl1Pg5Mizj9wP7Hebu55Hkw/viewform?usp=sf_link")}>
                                    <Typography variant="h7" component="div">
                                    Feedback Form
                                    </Typography>
                                </Button>
                            </CardContent>
                            <CardContent>
                                
                                <Typography variant="h6" component="div">
                                    <b>If you did an integration, first reload, then confirm it in settings!</b>
                                </Typography>
                                <Typography variant="h6" component="div">
                                    <b>New? Head over to Settings!</b>
                                </Typography>
                            </CardContent>
                            
                            <CardContent>
                                {/* <Typography variant="h6" component="div">
                                    Setup Guide
                                </Typography> */}
                                {/* <iframe src="https://www.loom.com/embed/a709405918cf47b7b504c0fdc8cdba4c?sid=1f0e34c2-a57a-49e3-b1e3-d0a9e0d7c19d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen width={horizontal ? 640 : 300} height={horizontal ? 400 : 200}></iframe> */}
                            </CardContent>
                            <CardContent>
                            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeS7TypPDTjeniHjAQ8uWqlNKrLl1Pg5Mizj9wP7Hebu55Hkw/viewform?embedded=true" width="640" height="1359" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                            
                            </CardContent>
                            
                            
                            {/* <CardContent>

                            
                                <Typography variant="h5" component="div">
                                    Skipped Exercises
                                </Typography>
                                <List>
                                    {skippedBodyParts.map(item => {
                                        return(
                                            <ListItem>
                                                {item}
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </CardContent> */}
                        </Card>
                        
                    
                </Grid>
              
            </Grid>
        </Box>
    )
}