import { Box,  Typography } from '@mui/material';
import React from 'react';
import { navigate } from "gatsby";
import Street from './Street';
import { makeStyles } from '@mui/styles';
import road1 from "../images/road/road1.jpg"
import road2 from "../images/road/road2.jpg"
import road3 from "../images/road/road3.jpg"

const StreetComp = () => {
    const classes=styles()

    return (
        <Box className={classes.container}>
<Box onClick={()=>navigate("/road1")} >
<Street road="1" bg={road1} />
</Box>
<Box onClick={()=>navigate("/road2")} >
<Street road="2" bg={road2} />
</Box>
<Box onClick={()=>navigate("/road3")} >
<Street road="3" bg={road3} />
</Box>




          
        </Box>
    );
};
const styles=makeStyles({
    container:{
        display:'flex !important',
    
    }
    })

export default StreetComp;