import { Box,  Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const Street = ({road,bg}) => {
    const classes=styles()
    return (
        <Box className={classes.container}>
            <Box className={classes.title} style={{ backgroundImage:`url(${bg})`, backgroundSize:"cover", width:"20vw", height:"30vw",zIndex:"-5.5"}}>
            <Typography  variant="h4">Road {road}</Typography>
            </Box>  
               
        </Box>
    );
};
const styles=makeStyles({
    container:{
       margin:"1vw"
    },
    title:{

        margin:'auto !important',
       display:"flex",
       alignItems:"center ",
       justifyContent:"center"
    }
    })
export default Street;