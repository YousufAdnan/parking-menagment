import { Box, Modal } from "@mui/material"
import React from "react"
import Calender from "../components/Level-1/Calender"
import { makeStyles } from "@mui/styles"
import ManageItems from "../components/Level-1/manageItems"

const CalenderAndRoutes = ({ open, handleClose }) => {
  const classes = styles()
  const [date, setDate] = React.useState(new Date())

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Box className={classes.dateContainer}>
            <Calender date={date} setDate={setDate} />
            <ManageItems date={date} />
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
const styles = makeStyles({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    backgroundColor: "#ffffff",
    boxShadow: 24,
    p: 4,
  },
  dateContainer: {
    display: "flex !important",
  },
})

export default CalenderAndRoutes
