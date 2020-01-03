import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Apps() {
  return (
   <Box display="flex" justifyContent="center">
      <React.Fragment>
      <AppBar position="static" style={{ height: 60, backgroundColor: 'blue', maxWidth: 443 }}>
        <Typography>AppBar</Typography>
      </AppBar>
    </React.Fragment>
   </Box> 
   
  );
}

export default Apps;
