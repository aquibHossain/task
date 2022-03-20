import logo from './logo.svg';
import './App.css';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div>
      
         <Grid container spacing={2} >
            <Grid item xs={12} md={2} sm={6}
            sx={{backgroundColor:'black',color:'gray'}}>
                <Box>
                <i class="fa-solid fa-triangle"></i>
                </Box>
                <Box>
                    <ul  style={{listStyle:'none'}}>
                        <li className='my-4' ><i style={{color:"#2b7377"}} class="fas fa-users"></i>Profile</li>
                        <li className='my-4'><i style={{color:"#2b7377"}} class="fas fa-users"></i>Overview</li>
                        <li className='my-4'><i style={{color:"#2b7377"}} class="fas fa-users"></i>Calendar</li>
                        <li className='my-4'><i style={{color:"#2b7377"}} class="fas fa-users"></i>Team</li>
                        <hr className='my-4' />
                        <li className='my-4'><i style={{color:"#2b7377"}} class="fas fa-users"></i>Chat</li>
                        <li className='my-4'><i style={{color:"#2b7377"}} class="fas fa-users"></i>Settings</li>
                    </ul>
                   
                </Box>
            </Grid>
            <Grid  item xs={12} md={9} sm={6} sx={{mt:5 ,p:2}}>
                 <Box className='d-flex justify-content-between'>
                 <Box className='d-flex align-items-center'>
                 <Typography variant='h4' sx={{fontWeight:'bold'}}>Overview</Typography>
                 <Typography className='ms-3'> | </Typography>
                 <Typography variant='p' className='ms-3'>Keep track of all your task</Typography>
                 </Box>
                 <Typography className=' p-1 d-inline border rounded-circle border-dark'><i className="fa-solid fa-bell"></i></Typography>
                 </Box>
                 <Box sx={{backgroundColor:'black',p:3,borderRadius:3,mt:5}}>
                    <Typography variant='h4' sx={{color:'white'}}>Make Real Work happen!</Typography>
                    <Typography variant='p' sx={{color:'gray'}}>Create your team,paln,collabrate,organize your work</Typography>
                 </Box>
                 <Box>  
                 <Typography variant='h4' sx={{fontWeight:'bold',mt:5}}>Projects</Typography>
            <Grid container spacing={2} sx={{my:1}}>
               <Grid item xs={12} md={3} sm={6} >
               <Box className='shadow-lg text-center' sx={{backgroundColor:"black",p:3}}>
               <i style={{color:"green"}} class="fa-solid fa-house"></i>
               <br />
               <br />
               <Typography variant='h4' sx={{color:'white'}}>Animation</Typography>
               <Typography variant='p' sx={{color:'gray'}}>Create loop animation</Typography>
               <Button className='text-success'>View Details </Button>
               </Box>
               </Grid>
               <Grid item xs={12} md={3} sm={6} >
               <Box className='shadow-lg text-center' sx={{p:3}}>
               <i  class="fa-solid fa-house"></i>
               <br />
               <br />
               <Typography variant='h4' >Animation</Typography>
               <Typography variant='p' sx={{color:'gray'}}>Create loop animation</Typography>
               <Button className='text-dark'>View Details </Button>
               </Box>
               </Grid>
               <Grid item xs={12} md={3} sm={6} >
               <Box className='shadow-lg text-center' sx={{p:3}}>
               <i  class="fa-solid fa-house"></i>
               <br />
               <br />
               <Typography variant='h4' >Animation</Typography>
               <Typography variant='p' sx={{color:'gray'}}>Create loop animation</Typography>
               <Button className='text-dark'>View Details </Button>
               </Box>
               </Grid>
               <Grid item xs={12} md={3} sm={6} >
               <Box className='shadow-lg text-center' sx={{p:3}}>
               <i  class="fa-solid fa-house"></i>
               <br />
               <br />
               <Typography variant='h4' >Animation</Typography>
               <Typography variant='p' sx={{color:'gray'}}>Create loop animation</Typography>
               <Button className='text-dark'>View Details </Button>
               </Box>
               </Grid>
               
           </Grid>
                 </Box>
                 <Box>
                 <Typography variant='h4' sx={{fontWeight:'bold',mt:5}}>Task Activity</Typography>
                 </Box>
            </Grid>
            <Grid sx={{backgroundColor:'darkgray'}}  item xs={12} md={1} sm={6}>
              <Box sx={{my:2}}>
              <Avatar></Avatar>
              </Box>
              <Box sx={{my:2}}>
              <Avatar></Avatar>
              </Box>
              <Box sx={{my:2}}>
              <Avatar></Avatar>
              </Box>
              <Box sx={{my:2}}>
              <Avatar></Avatar>
              </Box>
            </Grid>
           
            </Grid>
            
    </div>
  );
}

export default App;
