import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar className='AppBar' position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
        <div className='navButton'>
        <Button color="inherit"> <Link className='home' style={{textDecoration:"none", color:"black"}} to='/'>Home</Link> </Button>
          <Button color="inherit"> <Link className='home' style={{textDecoration:"none", color:"black"}} to='/add'>Add</Link> </Button>
        </div>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar