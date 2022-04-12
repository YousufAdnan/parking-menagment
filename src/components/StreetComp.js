import { Box,  Typography,Modal,TextField   } from '@mui/material';
import React from 'react';
import { navigate } from "gatsby";
import Street from './Street';
import { makeStyles } from '@mui/styles';
import road1 from "../images/road/road1.jpg"
import road2 from "../images/road/road2.jpg"
import road3 from "../images/road/road3.jpg"
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const StreetComp = () => {
    const classes=styles()
    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const routeLink=[
        {name:"Parking Slot" },
        {  name:"Staff Working"},
        { name:"Total Income"},
        { name:"Total Payment"},
        { name:"Total In Cash"},
        { name:"Total Card Payment"},
    ]
    return (
        <Box>
        <Box className={classes.container}>
            <Box onClick={handleOpen} >
            <Street road="19 Liberty St, New York, NY 10045, USA" bg={road1} />
            </Box>
                   
            <Box onClick={()=>navigate("/road2")} >
            <Street road="10, Jalan Tiga, 55200 Kuala Lumpur, Malaysia" bg={road2} />
            </Box>
            <Box onClick={()=>navigate("/road3")} >
            <Street road="19 Liberty St, New York, NY 10045, USA" bg={road3} />
             </Box>


             

                

          
        </Box>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box  className={classes.modal}>
            <Box className={classes.dateContainer} >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            value={date}
                            onChange={(newValue)=>setDate(newValue) }
                        renderInput={(params) => <TextField {...params} />}
                        />
            </LocalizationProvider>
            <Box>
            {routeLink.map(items=>(
                <Box className={classes.text}>
                <Typography variant="h6">{items.name}</Typography>
                </Box>
            ))}
            
        </Box>
        </Box>
        </Box>
      </Modal>
        </Box>
    );
};
const styles=makeStyles({
    container:{
        display:'flex !important',
    
    },
    modal:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        backgroundColor: '#ffffff',
        boxShadow: 24,
        p: 4,
    },
    dateContainer:{
        display:'flex !important',
       
    },
    text:{
border:"1 px solid #000000 "
    }
    })

export default StreetComp;