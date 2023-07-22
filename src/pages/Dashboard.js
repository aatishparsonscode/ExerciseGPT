import * as React from 'react';
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

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { listExerciseLog } from '../fakeData'
import awsExports from '../aws-exports';
import { listExerciseLogs } from '../graphql/queries';
import { updateUsersExercise } from '../graphql/mutations';

import logo from '../assets/logo.png'

const fakeExerciseLog =     ["bicep","tricep","trapezius"]

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function createData({exerciseName, timestamp}){
    const dateObj = new Date(timestamp)
    const dateLocal = dateObj.toLocaleTimeString(undefined, {timeStyle:'short'}) + " " + dateObj.toLocaleDateString()
    return {exerciseName, dateLocal}
}

export default function Dashboard(props){
    const { UserID, ExerciseInterval, LastExerciseTime } = props.data

    const  horizontal  = props.horizontal

    const [exerciseLogs, setExerciseLogs] = useState([])
    const [skippedBodyParts, setSkippedBodyParts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        // retrieve latest logs here
        async function setup(){
            console.log(UserID, "Setup UserID in Dashboard")
            setExerciseLogs(await getExerciseLogs())
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
                    limit : 15
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
                    LastExerciseTime : 0
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

    
    console.log("IS HORIZONTAL", horizontal)
    return(
        <Box sx={{minWidth : '100%'}}>
            <Grid container spacing={2} columnSpacing={5} direction = {horizontal ? "row" : 'column-reverse'}>
                <Grid item xs={6} >
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: window.innerHeight - 100}} >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Exercise Log
                            </Typography>
                        </CardContent>
                        
                        <Table sx={{minWidth : 500}} stickyHeader aria-label="Exercise Logs">
                            <TableHead>
                                <TableCell>Exercise</TableCell>
                                <TableCell align="right">Date</TableCell>
                            </TableHead>
                            <TableBody>
                                {exerciseLogs.map((row) => (
                                    <TableRow key={row.dateLocal}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" >
                                    {row.exerciseName}
                                </TableCell>
                                <TableCell align="right">{row.dateLocal}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Paper>
                </Grid>
                <Grid xs={5} item >
                   
                    <Grid item xs={12}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                
                                <CardMedia
                                    src={logo}
                                    component="img"
                                    sx={{width : 1}}
                                />
                                <Typography variant="h4" component="div">
                                    Need a break?
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" onClick={() => requestExerciseEarly()}>
                                    <Typography variant="h7" component="div">
                                    Request Your Next Exercise
                                    </Typography>
                                </Button>
                                
                            </CardActions>
                            <CardActions>
                                <Typography variant="h7" component="div">
                                    Time to next exercise: {getTimeToNextExercise()} minutes
                                </Typography>
                            </CardActions>
                            
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
              
            </Grid>
        </Box>
    )
}