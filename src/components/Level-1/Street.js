import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"

const Street = ({ road, bg }) => {
  const classes = styles()
  return (
    <Box className={classes.container}>
      <Box
        className={classes.title}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          width: "25vw",
          height: "30vw",
          backgroundColor: "rgba(45, 58, 74, 0.7)",
          backgroundBlendMode: "darken, luminosity",
        }}
      >
        <Typography variant="h6" color="white">
          {road}
        </Typography>
      </Box>
    </Box>
  )
}
const styles = makeStyles({
  container: {
    margin: "1vw",
  },
  title: {
    margin: "auto !important",
    display: "flex",
    alignItems: "center ",
    justifyContent: "center",
    padding: "1vw",
  },
})
export default Street
