import React from 'react';
import Layout from './../components/layout';
import parkinSlot from "../images/parking-slot.jpg"
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import roadMap from '../images/road/road-map.jpg'
import usedParking1 from '../images/parking-slot/used-1.jpg'
import usedParking2 from '../images/parking-slot/used-2.jpg'
import unUsedParking1 from '../images/parking-slot/unused-1.jpg'
import unUsedParking2 from '../images/parking-slot/unused-2.jpg'
import { employee } from './../components/Employee';
const Road1 = () => {
    const classes=styles()
    const slots=[
        {slot:"slot-1",color:"green"},
        {slot:"slot-2",color:"red"},
        {slot:"slot-3",color:"red"},
        {slot:"slot-4" ,color:"green"},
        {slot:"slot-5",color:"red"},
        {slot:"slot-6",color:"red"},
        {slot:"slot-7" ,color:"green"},
        {slot:"slot-8",color:"red"},
        {slot:"slot-9" ,color:"green"},
        {slot:"slot-10", color:"red"},
        {slot:"slot-11",color:"red"},
        {slot:"slot-12",color:"red"},
    ]
    const parking=[
        {
            address:"55 Water Street - Lot #23",
            garage:"Parking garage 55 Water St",
            open:"Open 24 hours +1212-9334-8660"
    },
        {
            address:"49-59 Henry6 St Parking",
            garage:"Parking lot 47-59 Henry St",
            open:" +1212-9334-8660"
    },
    //     {
    //         address:"IPark",
    //         garage:"Parking garage 25 Platt St",
    //         open:"Open 24 hours +1212-9334-8660"
    // },
    //     {
    //         address:"55 Water Street - Lot #23",
    //         garage:"Parking garage 55 Water St",
    //         open:"Open 24 hours +1212-9334-8660"
    // },
    ]
    return (
        <Layout>
         <Box >
         <Typography align="center" variant="h4">Used parking</Typography>
             <Box className={classes.imageContainer}>
                
                <img className={classes.image} src={usedParking1} alt="" />
                <img className={classes.image} src={usedParking2} alt="" />
             </Box>
            
             <Typography sx={{mt:10}} align="center" variant="h4">Unused parking</Typography>
             <Box className={classes.imageContainer}>
            <img className={classes.image} src={unUsedParking1} alt="" />
            <img className={classes.image} src={unUsedParking2} alt="" />
            </Box>
        
            <Typography sx={{mt:10}} variant="h4"> Available parking lot</Typography>      
            {parking.map(items=>(
            <Box className={classes.parkingSlotContainer}>
                <Typography variant="h5">{items.address}</Typography>
                <Typography variant="h6">{items.garage}</Typography>
                <Typography variant="h6">{items.open}</Typography>
            </Box>
            ))}
          <Typography sx={{mt:10}} align="center" variant="h4">Best parking slot</Typography>
            <Box className={classes.container}>
                    {
                        slots.map(items=>(
                    <Box >
                        <Typography className={classes.title} sx={{color:items.color}} variant="h5" >{items.slot}</Typography>
                    </Box>
                        ))
                    }
            </Box>
            </Box>
           
            <Box className={classes.cardContainer}>
            
                <Box className={classes.card}>
                    <img className={classes.profileImage} src={employee[0].image} alt="" />
                    <Typography variant="h5"><span className={classes.span}>Name:</span> {employee[0].name}</Typography>
                    {/* <Typography variant="h6"><span className={classes.span}>Road:</span> {employee[0].road}</Typography> */}
                    <Typography variant="h6"><span className={classes.span}>Address:</span>  {employee[0].address}</Typography>
                    <Typography variant="h6">Transaction id:</Typography>
                </Box>
    
            </Box>
           
          
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
       
      
    },
    image:{
        width:"50%"
    },
    imageContainer:{
        display:"flex"
    },
    parkingSlotContainer:{
        marginTop:"3vw !important"
    },
    
    profileImage:{
        borderRadius:"30px !important",
        width:"15vw !important",
        height:"13vw !important"
            },
            cardContainer:{
        
                display:'flex',
                
            },
            card:{
                margin:" 5vw  auto 0 auto !important",
                textAlign:"center"
           
            },
            span:{
                fontWeight:"700"
            }

  
})
export default Road1;