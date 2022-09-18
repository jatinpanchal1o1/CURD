import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useStyles} from './style.js';

export default function NavBar() {
    const classes = useStyles();
   return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.heading}>
          <Typography variant="h6" color="inherit" component="div">
            Files
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
