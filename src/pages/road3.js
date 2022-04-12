import React from "react"
import Layout from "./../components/layout"
import parkinSlot from "../images/parking-slot.jpg"
import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
const Road3 = () => {
  const classes = styles()
  const slots = [
    { slot: "slot-1" },
    { slot: "slot-2", color: "white" },
    { slot: "slot-3" },
    { slot: "slot-4" },
    { slot: "slot-5" },
    { slot: "slot-6", color: "white" },
    { slot: "slot-7", color: "white" },
    { slot: "slot-8", color: "white" },
    { slot: "slot-9", color: "white" },
    { slot: "slot-10", color: "white" },
    { slot: "slot-11", color: "white" },
    { slot: "slot-12", color: "white" },
  ]
  return (
    <Layout>
      <Box className={classes.container}>
        {slots.map(items => (
          <Box>
            <Typography
              className={classes.title}
              color={items.color}
              variant="h5"
            >
              {items.slot}
            </Typography>
          </Box>
        ))}
      </Box>
    </Layout>
  )
}

const styles = makeStyles({
  container: {
    backgroundImage: `url(${parkinSlot})`,
    backgroundSize: "cover",
    width: "68vw !important",
    height: "30vw !important",
    backgroundPosition: "center",
    display: "flex !important",
    flexWrap: "wrap !important",
  },
  title: {
    margin: "6vw 0 2vw 4vw !important",
    width: "7vw",
    color: "red",
  },
})
export default Road3
