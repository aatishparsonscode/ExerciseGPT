// // // // // import * as React from 'react';
// // // // // import Box from '@mui/material/Box';
// // // // // import Card from '@mui/material/Card';
// // // // // import CardActions from '@mui/material/CardActions';
// // // // // import CardContent from '@mui/material/CardContent';
// // // // // import Button from '@mui/material/Button';
// // // // // import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}


// // // // // import * as React from 'react';
// // // // // import { styled } from '@mui/material/styles';
// // // // // import Card from '@mui/material/Card';
// // // // // import CardHeader from '@mui/material/CardHeader';
// // // // // import CardMedia from '@mui/material/CardMedia';
// // // // // import CardContent from '@mui/material/CardContent';
// // // // // import CardActions from '@mui/material/CardActions';
// // // // // import Collapse from '@mui/material/Collapse';
// // // // // import Avatar from '@mui/material/Avatar';
// // // // // import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// // // // // import Typography from '@mui/material/Typography';
// // // // // import { red } from '@mui/material/colors';
// // // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // // import ShareIcon from '@mui/icons-material/Share';
// // // // // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// // // // // import MoreVertIcon from '@mui/icons-material/MoreVert';

// // // // // interface ExpandMoreProps extends IconButtonProps {
// // // // //   expand: boolean;
// // // // // }

// // // // // const ExpandMore = styled((props: ExpandMoreProps) => {
// // // // //   const { expand, ...other } = props;
// // // // //   return <IconButton {...other} />;
// // // // // })(({ theme, expand }) => ({
// // // // //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
// // // // //   marginLeft: 'auto',
// // // // //   transition: theme.transitions.create('transform', {
// // // // //     duration: theme.transitions.duration.shortest,
// // // // //   }),
// // // // // }));

// // // // // export default function RecipeReviewCard() {
// // // // //   const [expanded, setExpanded] = React.useState(false);

// // // // //   const handleExpandClick = () => {
// // // // //     setExpanded(!expanded);
// // // // //   };

// // // // //   return (
// // // // //     <Card sx={{ maxWidth: 345 }}>
// // // // //       <CardHeader
// // // // //         avatar={
// // // // //           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
// // // // //             R
// // // // //           </Avatar>
// // // // //         }
// // // // //         action={
// // // // //           <IconButton aria-label="settings">
// // // // //             <MoreVertIcon />
// // // // //           </IconButton>
// // // // //         }
// // // // //         title="Shrimp and Chorizo Paella"
// // // // //         subheader="September 14, 2016"
// // // // //       />
// // // // //       <CardMedia
// // // // //         component="img"
// // // // //         height="194"
// // // // //         image="/static/images/cards/paella.jpg"
// // // // //         alt="Paella dish"
// // // // //       />
// // // // //       <CardContent>
// // // // //         <Typography variant="body2" color="text.secondary">
// // // // //           This impressive paella is a perfect party dish and a fun meal to cook
// // // // //           together with your guests. Add 1 cup of frozen peas along with the mussels,
// // // // //           if you like.
// // // // //         </Typography>
// // // // //       </CardContent>
// // // // //       <CardActions disableSpacing>
// // // // //         <IconButton aria-label="add to favorites">
// // // // //           <FavoriteIcon />
// // // // //         </IconButton>
// // // // //         <IconButton aria-label="share">
// // // // //           <ShareIcon />
// // // // //         </IconButton>
// // // // //         <ExpandMore
// // // // //           expand={expanded}
// // // // //           onClick={handleExpandClick}
// // // // //           aria-expanded={expanded}
// // // // //           aria-label="show more"
// // // // //         >
// // // // //           <ExpandMoreIcon />
// // // // //         </ExpandMore>
// // // // //       </CardActions>
// // // // //       <Collapse in={expanded} timeout="auto" unmountOnExit>
// // // // //         <CardContent>
// // // // //           <Typography paragraph>Method:</Typography>
// // // // //           <Typography paragraph>
// // // // //             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
// // // // //             aside for 10 minutes.
// // // // //           </Typography>
// // // // //           <Typography paragraph>
// // // // //             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
// // // // //             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
// // // // //             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
// // // // //             large plate and set aside, leaving chicken and chorizo in the pan. Add
// // // // //             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
// // // // //             stirring often until thickened and fragrant, about 10 minutes. Add
// // // // //             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
// // // // //           </Typography>
// // // // //           <Typography paragraph>
// // // // //             Add rice and stir very gently to distribute. Top with artichokes and
// // // // //             peppers, and cook without stirring, until most of the liquid is absorbed,
// // // // //             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
// // // // //             mussels, tucking them down into the rice, and cook again without
// // // // //             stirring, until mussels have opened and rice is just tender, 5 to 7
// // // // //             minutes more. (Discard any mussels that don&apos;t open.)
// // // // //           </Typography>
// // // // //           <Typography>
// // // // //             Set aside off of the heat to let rest for 10 minutes, and then serve.
// // // // //           </Typography>
// // // // //         </CardContent>
// // // // //       </Collapse>
// // // // //     </Card>
// // // // //   );
// // // // // }


// // // // import * as React from 'react';
// // // // import Grid from '@mui/material/Grid';
// // // // import Paper from '@mui/material/Paper';
// // // // import Box from '@mui/material/Box';
// // // // import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// // // // const Item = styled(Paper)(({ theme }) => ({
// // // //   ...theme.typography.body2,
// // // //   textAlign: 'center',
// // // //   color: theme.palette.text.secondary,
// // // //   height: 60,
// // // //   lineHeight: '60px',
// // // // }));

// // // // const darkTheme = createTheme({ palette: { mode: 'dark' } });
// // // // const lightTheme = createTheme({ palette: { mode: 'light' } });

// // // // export default function Elevation() {
// // // //   return (
// // // //     <Grid container spacing={2}>
// // // //       {[lightTheme, darkTheme].map((theme, index) => (
// // // //         <Grid item xs={6} key={index}>
// // // //           <ThemeProvider theme={theme}>
// // // //             <Box
// // // //               sx={{
// // // //                 p: 2,
// // // //                 bgcolor: 'background.default',
// // // //                 display: 'grid',
// // // //                 gridTemplateColumns: { md: '1fr 1fr' },
// // // //                 gap: 2,
// // // //               }}
// // // //             >
// // // //               {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
// // // //                 <Item key={elevation} elevation={elevation}>
// // // //                   {`elevation=${elevation}`}
// // // //                 </Item>
// // // //               ))}
// // // //             </Box>
// // // //           </ThemeProvider>
// // // //         </Grid>
// // // //       ))}
// // // //     </Grid>
// // // //   );
// // // // }


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


// // import * as React from 'react';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// // export default function FirstComponent() {
// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <DatePicker />
// //     </LocalizationProvider>
// //   );
// // }


// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateField } from '@mui/x-date-pickers/DateField';
// import { TimeField } from '@mui/x-date-pickers/TimeField';
// import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
// import { MultiInputDateRangeField } from '@mui/x-date-pickers-pro/MultiInputDateRangeField';
// import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
// import { MultiInputDateTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputDateTimeRangeField';
// import Stack from '@mui/material/Stack';
// import Tooltip from '@mui/material/Tooltip';

// function ProLabel({ children }) {
//   return (
//     <Stack direction="row" spacing={0.5} component="span">
//       <Tooltip title="Included in Pro package">
//         <a href="/x/introduction/licensing/#pro-plan">
//           <span className="plan-pro" />
//         </a>
//       </Tooltip>
//       <span>{children}</span>
//     </Stack>
//   );
// }

// export default function ComponentFamilies() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer
//         components={[
//           'DateField',
//           'TimeField',
//           'DateTimeField',
//           'MultiInputDateRangeField',
//           'MultiInputTimeRangeField',
//           'MultiInputDateTimeRangeField',
//         ]}
//       >
//         <DemoItem label="Date">
//           <DateField defaultValue={dayjs('2022-04-17')} />
//         </DemoItem>
//         <DemoItem label="Time">
//           <TimeField defaultValue={dayjs('2022-04-17T15:30')} />
//         </DemoItem>
//         <DemoItem label="Date Time">
//           <DateTimeField defaultValue={dayjs('2022-04-17T15:30')} />
//         </DemoItem>
//         <DemoItem
//           label={<ProLabel>Date Range</ProLabel>}
//           component="MultiInputDateRangeField"
//         >
//           <MultiInputDateRangeField
//             defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
//           />
//         </DemoItem>
//         <DemoItem
//           label={<ProLabel>Time Range</ProLabel>}
//           component="MultiInputTimeRangeField"
//         >
//           <MultiInputTimeRangeField
//             defaultValue={[dayjs('2022-04-17T15:30'), dayjs('2022-04-17T18:30')]}
//           />
//         </DemoItem>
//         <DemoItem
//           label={<ProLabel>Date Time Range</ProLabel>}
//           component="MultiInputDateTimeRangeField"
//         >
//           <MultiInputDateTimeRangeField
//             defaultValue={[dayjs('2022-04-17T15:30'), dayjs('2022-04-21T18:30')]}
//           />
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }