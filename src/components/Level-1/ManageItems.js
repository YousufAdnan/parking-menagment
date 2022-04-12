import { Box, Typography, Modal, TextField } from "@mui/material"
import React from "react"
import { navigate } from "gatsby"
import { makeStyles } from "@mui/styles"

const ManageItems = ({ date }) => {
  const classes = styles()

  const routeLink = [
    { name: "Parking Slot" },
    { name: "Staff Working" },
    { name: "Total Income" },
    { name: "Total Payment" },
    { name: "Total In Cash" },
    { name: "Total Card Payment" },
  ]
  return (
    <Box>
      {routeLink.map(items => (
        <Box className={classes.text}>
          <Typography variant="h6">{items.name}</Typography>
        </Box>
      ))}
    </Box>
  )
}
const styles = makeStyles({
  text: {
    border: "1px solid #000000 !important ",
    margin: "1vw 1vw 1vw 10vw !important",
    padding: "0.5vw !important",
  },
})

export default ManageItems
