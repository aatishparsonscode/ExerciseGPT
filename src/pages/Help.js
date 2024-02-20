import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Help(props) {
    return (
    <Box>
        <Typography variant="h5" component="div">
            Scroll for information on Email, Google Calendar, and Slack Integrations
        </Typography>
        <Card sx={{ minWidth: 275, marginTop: 5}}>
        
        <CardContent>
          <Typography variant="h5" component="div">
            General
          </Typography>
        </CardContent>
        <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            What is this?
          </Typography>
          <Typography variant="body2">
            MyOfficeTrainer and the MyOfficeGym platform are designed to help minimize damage caused by sitting 8 hours at a time. 
            <br/>
            <br/>
            This is achieved through the following features:
            <br/>
            - It syncs with your Google Calendar to understand your schedule - monitoring your schedule to the minute via AWS.
            <br/>
            - You receive exercise recommendations via Slack (email is an option too!). Powered by OpenAI, these suggestions are tailored to your needs - including alleviating back pain, tight shoulders, and more!
            <br/>
            - Exercises are strategically timed, so they won't disrupt your workflow. You can even choose which body parts to target!
          </Typography>
        </CardContent>
        <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            How do I get the most out of this?
          </Typography>
          <Typography variant="body2">
            <b>Make it a habit</b>
            <br />
            We know it's very easy to ignore the notification, but once you click and execute on it a few times it'll become second nature, and your body will thank you!
            <br/>
            <br/>
            <b>Record your progress</b>
            <br />
            Each exercise is sent with a "Complete" or "Done" button, make sure to click this after doing your exercise! It helps us generate reports showing your progress and further customize the experience. There's also other nice reminders after you click on it :)
          </Typography>
        </CardContent>
      </Card>
        <Card sx={{ minWidth: 275, marginTop:5 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Email
          </Typography>
        </CardContent>
        <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            How To Setup
          </Typography>
          <Typography variant="body2">
            0. Duplicate this tab so you can see the instructions
            <br />
            1. On the Dashboard Tab click "Request your next movement" on the right under "Need a break?"
            <br />
            2. Check your email for an exercise (takes max 60 seconds) - be sure to check spam and junk too
            <br />
            3. Mark the email as safe/not spam to ensure it reaches your inbox next time
            <br />
            4. Optional: Create a seperate folder for exercises to get delivered from <b>myofficetrainer.email@gmail.com</b> - this way your inbox doesn't get cluttered
            <br /> 
            5. You're all set! Now MyOfficeTrainer will send exercises to your email at the appropriate time!
          </Typography>
        </CardContent>
        <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Common Questions/Issues
          </Typography>
          <Typography variant="body2">
            <b>Can I change which email exercises are sent too?</b>
            <br />
            Yes! By default exercises are sent to the email used in registration, but you can change it by going to the Settings Tab - Exercise delivery method - type in new email - hit save!
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, marginTop: 5 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Google Calendar
          </Typography>
        </CardContent>
        <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            How To Setup
          </Typography>
          <Typography variant="body2">
            0. Duplicate this tab so you can see the instructions
            <br />
            1. Navigate to the Settings Tab
            <br />
            2. Scroll down to "Integrations", it's on the bottom of the pane with "Scheduled Days"
            <br />
            3. Under "Calendars" click on "Google Calendar"
            <br />
            4. Login to the email containing your work Calendar
            <br /> 
            5. If you see <b>"Google hasn't verified this app"</b> click "Advanced" and then "Go to myofficegym.netlify.app (unsafe)"
            <br /> 
            6. Click "Continue"
            <br />
            7. Reload/Refresh the pages
            <br /> 
            8. Navigate to the Settings Tab and scroll down to "Integrations", make sure under "Calendars" Google Calendar is blue, and under "Calendar Sync" Google Calendar is blue
            <br />
            9. You're all set! Now MyOfficeTrainer will dynamically send you movements when you can actually do them!
          </Typography>
        </CardContent>
        <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Common Questions/Issues
          </Typography>
          <Typography variant="body2">
            <b>Why is there a warning stating "Google hasn't verified this app"?</b>
            <br />
            Google requires connected services to have a domain - we have not yet been able to secure one. This means we cannot participate in the verification process, but rest assured using MyOfficeTrainer/Gym is perfectly safe and all your data is anonymized. If you have further questions or concerns please don't hesitate to contact us through email via <b>myofficetrainer.email@gmail.com</b>
          </Typography>
          <Typography variant="body2">
            <br/>
            <b>What do you do with my Google Calendar information?</b>
            <br />
            Exercising at work is inconvenient. It breaks an individuals flow if it's a distraction. That's why we use your schedule from Google Calendar to make exercising as convenient as possible. For example, we check your schedule so we can target sending exercises after a meeting or other commitment when you aren't busy. In this way you aren't interrupted in the middle of work.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, marginTop:5 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Slack
          </Typography>
        </CardContent>
        <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            How To Setup
          </Typography>
          <Typography variant="body2">
            0. Duplicate this tab so you can see the instructions
            <br />
            1. Navigate to the Settings Tab
            <br />
            2. Scroll down to "Integrations", it's on the bottom of the pane with "Scheduled Days"
            <br />
            3. Under "Delivery" click on "Slack"
            <br />
            4. Click Allow
            <br /> 
            7. Reload/Refresh the pages
            <br /> 
            8. Navigate to the Settings Tab and scroll down to "Integrations", make sure under "Delivery" Slack is blue, and under "Exercise delivery method" Slack is blue
            <br />
            9. You're all set! Now MyOfficeTrainer will DM you exercises on Slack!
          </Typography>
        </CardContent>
        <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Common Questions/Issues
          </Typography>
          <Typography variant="body2">
            <b>Why is there a warning stating "This app is not approved by Slack"?</b>
            <br />
            When enabling Slack you will be presented with a warning stating that “This app is not approved by Slack”. This is because for approval we have to be in a minimum of 10 slack workspaces - we are not yet. It is safe to ignore the warning though and click "Allow". If it is finicky please let us know (you can also have it deliver exercises to a personal slack workspace). For help troubleshooting please email <b>myofficetrainer.email@gmail.com</b>
          </Typography>
          <Typography variant="body2">
            <br/>
            <b>What do you do with Slack?</b>
            <br />
            We know certain professionals are more active on Slack, so to make it convenient to get your exercises we simply Direct Message exercises to you at the appropriate time!
          </Typography>
        </CardContent>
      </Card>
      
    </Box>
    );
  }