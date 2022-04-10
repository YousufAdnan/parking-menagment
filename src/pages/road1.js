import React from 'react';
import Layout from './../components/layout';
import parkinSlot from "../images/parking-slot.jpg"
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const Road1 = () => {
    const classes=styles()
    const slots=[
        {slot:"slot-1",color:"white"},
        {slot:"slot-2"},
        {slot:"slot-3"},
        {slot:"slot-4" ,color:"white"},
        {slot:"slot-5"},
        {slot:"slot-6"},
        {slot:"slot-7" ,color:"white"},
        {slot:"slot-8"},
        {slot:"slot-9" ,color:"white"},
        {slot:"slot-10"},
        {slot:"slot-11"},
        {slot:"slot-12"},
    ]
    return (
        <Layout>
            <Box className={classes.container}>
            {
                slots.map(items=>(
            <Box>
                <Typography className={classes.title} color={items.color} variant="h5" >{items.slot}</Typography>
            </Box>
                ))
            }
            </Box>
            <Typography variant="body1">Whole road in one parking is</Typography>
        </Layout>
    );
};

const styles=makeStyles({
    container:{
        backgroundImage:`url(${parkinSlot})`,
        backgroundSize:"cover",
        width:"68vw !important",
        height:"30vw !important",
        backgroundPosition:"center",
        display:"flex !important",
        flexWrap:"wrap !important"
    },
    title:{
        margin:"6vw 0 2vw 4vw !important",
        width:"7vw",
        color:"red",
      
    }
})
export default Road1;