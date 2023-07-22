import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { useState, useEffect } from 'react';
import { CardContent, Typography } from '@mui/material';

import awsExports from '../aws-exports';
import { listExerciseLogs } from '../graphql/queries';
import { updateUsersExercise } from '../graphql/mutations';


const fakeBodyPartDifficulty = [
    {"key" : "Traps", "value" : "easy"},
    {"key" :"Arms", "value" : "medium"},
    {"key" :"Legs", "value" : "hard"},
    {"key" :"Calves", "value" : "easy"},
]

const fakeIgnoreBodyParts = ["Joints","Trapezius","palms"]



export default function Settings(props){
    const { UserID, BodyPosition, Difficulty, ExerciseInterval, IgnoreExercises, Location, DeliveryMethod, WindowStartHour, WindowEndHour,WindowDays} = props.data
    const  horizontal  = props.horizontal

    const [bodyPartDifficulty, setBodyPartDifficulty] = useState([])
    const [formattedBodyPartDiff, setFormattedBodyPartDiff] = useState([])
    const [ignoreExercises, setIgnoreExercises] = useState([])
    const [formattedIgnoredBodyParts, setFormattedIgnoredBodyParts] = useState([])
    const [deliveryMethod, setDeliveryMethod] = useState(null)
    const [exerciseInterval, setExerciseInterval] = useState(null)
    const [bodyPosition, setBodyPosition] = useState(null)
    const [location, setLocation] = useState(null)

    const [loading, setLoading] = useState(true)

    const [daysChecked, setDaysChecked] = useState([false, false,false,false,false,false,false])
    const [windowStartLocalUX, setWindowStartLocalUX] = useState()
    const [windowEndLocalUX, setWindowEndLocalUX] = useState()
    const [windowStart, setWindowStart] = useState(null)
    const [windowEnd, setWindowEnd] = useState(null)

    useEffect(() => {
        // retrieve settings here
        console.log(Difficulty)
        const parsed = Difficulty
        setBodyPartDifficulty(parsed)
        setFormattedBodyPartDiff(formatDifficulty(parsed))
        //console.log(convertFormattedDifficultyBackToMap(formatDifficulty(parsed)))
        //console.log(JSON.stringify(convertFormattedDifficultyBackToMap(formatDifficulty(parsed))))
        //setformattedIgnoredBodyParts(IgnoreExercises)
        setDeliveryMethod(DeliveryMethod)
        setExerciseInterval(ExerciseInterval)
        setBodyPosition(BodyPosition)
        setLocation(Location)
        setDaysChecked(WindowDays)
        setWindowStartLocalUX(convertDBtimeToDate(WindowStartHour))
        setWindowEndLocalUX(convertDBtimeToDate(WindowEndHour))
        setWindowStart(WindowStartHour)
        setWindowEnd(WindowEndHour)
    },[])

    useEffect(() => {
        if(exerciseInterval !== null){
            setLoading(false)
        }
    },[exerciseInterval])


    // Construct interface data for ignoreBodyParts
    // data is array of parts to ignore
    // use formatted map to iterate over body parts and make own map
    useEffect(() => {
        if(formattedBodyPartDiff !== []){
            let listOfObjs = formattedBodyPartDiff
            for(let obj in listOfObjs){
                if(IgnoreExercises.includes(listOfObjs[obj]['bodyPart'])){
                    listOfObjs[obj]['ignoring'] = true
                }else{
                    listOfObjs[obj]['ignoring'] = false
                }
                
            }
            setFormattedIgnoredBodyParts(listOfObjs)
        }
        
    },[formattedBodyPartDiff])

    useEffect(() => {
        setIgnoreExercises(formatExercise(formattedIgnoredBodyParts))
    },[formattedIgnoredBodyParts])

    const toggleEnableDisableExercise = (item) => {
        console.log(item, "TOGGLING")
        let listOfObjs = formattedIgnoredBodyParts
        for(let obj in listOfObjs){
            if(item['bodyPart'] === listOfObjs[obj]['bodyPart']){
                listOfObjs[obj]['ignoring'] = !listOfObjs[obj]['ignoring']
            }
        }
        setFormattedIgnoredBodyParts([...listOfObjs])
    }

    const formatExercise = (data) => {
        let listIgnore = []
        for(let obj in data){
            if(data[obj]['ignoring']){
                let formattedPart = data[obj]['bodyPart'].replace("_"," ")
                listIgnore.push(formattedPart)
            }
        }
        return listIgnore
    }

    const formatDifficulty = (data) => {
        console.log(typeof data)
        let dataString = data.replace("{","").replace("}","")
        console.log(dataString)
        let dataList = dataString.split(", ")
        console.log(dataList)
        let arr = []
        for(let item in dataList){
            let split = dataList[item].split("=")
            arr.push({"bodyPart" : split[0], "difficulty" : split[1]})
        }
        console.log(arr, "formatted difficutly")
        return arr
    }

    const convertFormattedDifficultyBackToMap = (data) => {
        let res = {}
        
        data.forEach(element => {
            res[element["bodyPart"]] = element['difficulty']
        });
        
        return res
    }

    const changeDifficulty = (item, difficulty) => {
        let listOfObjs = formattedBodyPartDiff
        for(let obj in listOfObjs){
            if(item['bodyPart'] === listOfObjs[obj]['bodyPart']){
                listOfObjs[obj]['difficulty'] = difficulty
            }
        }
        setFormattedBodyPartDiff([...listOfObjs])
    }

    const getDeliveryMethod = () => {
        //TODO
    }

    const getBodyPartDifficulty = () => {
        //TODO
    }

    const getformattedIgnoredBodyParts = () => {
        //TODO
    }

    const getExerciseInterval = () => {
        //TODO
    }

    const updateSettings = async () => {
        if(windowStart < windowEnd){
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
                        ExerciseInterval : exerciseInterval,
                        DeliveryMethod : deliveryMethod,
                        IgnoreExercises : ignoreExercises,
                        Difficulty : convertFormattedDifficultyBackToMap(formattedBodyPartDiff),
                        WindowDays : daysChecked,
                        WindowStartHour : windowStart,
                        WindowEndHour : windowEnd
                    }
                  }
                })
              }).then(async res => {
                const data = res.json()
                console.log(data)
                alert("Updated!")
              })
        }else{
            alert("Your start receiving must be before end")
        }
        
    }

    const handleIntervalSliderChange = (event) => {
        console.log(event)
        setExerciseInterval(event.target.value)
    }

    const handleDayClick = (dayIndex) => {
        console.log(dayIndex)
        let days = daysChecked
        days[dayIndex] = !days[dayIndex]
        setDaysChecked([...daysChecked])
    }

    const handleDateChangeStart = event => {
        const eventDateJS = event.toDate()
        eventDateJS.setUTCDate(new Date().getUTCDate())
        setWindowStart(getHourMinsFromUTC(eventDateJS))
        
        console.log("handle event change start")
    }

    const handleDateChangeEnd = event => {
        const eventDateJS = event.toDate()
        eventDateJS.setUTCDate(new Date().getUTCDate())
        setWindowEnd(getHourMinsFromUTC(eventDateJS))
        console.log("handle event change end")
    }

    const getHourMinsFromUTC = (dateVal) => {
        const dateIn = new Date(dateVal)
        const res = dateIn.getUTCHours() * 60 + dateIn.getUTCMinutes()
        console.log(res)
        return res
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

    if(loading){
        return(
            <p>Loading...</p>
        )
    }
    
    return(
        <Box sx={{flexGrow : 1}}>
            <Grid container spacing={2} columnSpacing={5} direction = {horizontal ? "row" : 'column'}>
            <Grid item xs={4}>
                    <Card>
                        
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Scheduled Days
                            </Typography>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked checked={daysChecked[0]} onClick={() => handleDayClick(0)}/>} label="Sunday" />
                                <FormControlLabel control={<Checkbox defaultChecked checked={daysChecked[1]} onClick={() => handleDayClick(1)}/>} label="Monday" />
                                <FormControlLabel control={<Checkbox defaultChecked checked={daysChecked[2]} onClick={() => handleDayClick(2)}/>} label="Tuesday" />
                                <FormControlLabel control={<Checkbox defaultChecked checked={daysChecked[3]} onClick={() => handleDayClick(3)}/>} label="Wednesday" />
                                <FormControlLabel control={<Checkbox defaultChecked checked={daysChecked[4]} onClick={() => handleDayClick(4)}/>} label="Thursday" />
                                <FormControlLabel control={<Checkbox defaultChecked checked={daysChecked[5]} onClick={() => handleDayClick(5)}/>} label="Friday" />
                                <FormControlLabel control={<Checkbox defaultChecked checked={daysChecked[6]} onClick={() => handleDayClick(6)}/>} label="Saturday" />
                            </FormGroup>
                        </CardContent>
                        <CardContent>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                                <TimePicker value={windowStartLocalUX} onChange={handleDateChangeStart} label="Start Receiving" />
                                <TimePicker value={windowEndLocalUX} onChange={handleDateChangeEnd} label="End Receiving" />
                            </DemoContainer>
                        </LocalizationProvider>
                        </CardContent>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Duration between exercises
                            </Typography>
                            <Slider aria-label="Temperature"
                                defaultValue={ExerciseInterval}
                                onChange={handleIntervalSliderChange}
                                valueLabelDisplay="auto"
                                step={5}
                                marks
                                min={10}
                                max={110}
                            />
                        </CardContent>
                    
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Exercise delivery method
                            </Typography>
                            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                                <Button onClick={() => setDeliveryMethod("EMAIL")}>Email</Button>
                                <Button onClick={() => setDeliveryMethod("SMS")}>SMS</Button>
                                <Button onClick={() => setDeliveryMethod("WHATSAPP")}>WhatsApp</Button>
                            </ButtonGroup>
                            <CardContent>
                            <Typography variant="h5" component="div">
                                Delivery Method: {deliveryMethod}
                            </Typography>
                            </CardContent>
                        </CardContent>
                        <CardContent>
                            <Button variant='contained' onClick={() => updateSettings()}>
                                Save
                            </Button>
                        </CardContent>
                       
                    </Card>
                </Grid>
                
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Difficulty By BodyPart
                            </Typography>
                            <List>
                                {formattedBodyPartDiff.map(item => {
                                    return(
                                        <>
                                        <ListItem>
                                            {item.bodyPart} - {item.difficulty} 
                                            
                                        </ListItem>
                                        <ListItem>
                                            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                                                <Button onClick={() => changeDifficulty(item, "Easy")}>EASY</Button>
                                                <Button onClick={() => changeDifficulty(item, "Medium")}>MEDIUM</Button>
                                                <Button onClick={() => changeDifficulty(item, "Hard")}>HARD</Button>
                                            </ButtonGroup>
                                        </ListItem>
                                        </>
                                    )
                                    
                                })}
                            </List>
                        </CardContent>
                        <CardContent>
                            <Button variant='contained' onClick={() => updateSettings()}>
                                Save
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={4}>
                    <Card>
                    <CardContent>
                            <Typography variant="h5" component="div">
                                Body Parts Blacklisted
                            </Typography>
                            <List>
                                {formattedIgnoredBodyParts.map(item => {
                                    
                                    if(item.ignoring){
                                        return(
                                            <ListItem>
                                                {item.bodyPart}
                                                <Button onClick={() => toggleEnableDisableExercise(item)}>
                                                     Enable
                                                </Button>
                                                
                                            </ListItem>
                                        )
                                    }else{
                                        return(
                                            <ListItem>
                                                {item.bodyPart}
                                                <Button onClick={() => toggleEnableDisableExercise(item)}>
                                                     Disable
                                                </Button>
                                            </ListItem>
                                        )
                                    }
                                    
                                })}
                            </List>
                        </CardContent>
                        <CardContent>
                            <Button variant='contained' onClick={() => updateSettings()}>
                                Save
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
            
            
            
        </Box>
    )
}