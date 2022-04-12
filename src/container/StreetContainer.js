import { Box } from "@mui/material"
import React from "react"
import { navigate } from "gatsby"
import Street from "./../components/Level-1/Street"
import { makeStyles } from "@mui/styles"
import road1 from "../images/road/road1.jpg"
import road2 from "../images/road/road2.jpg"
import road3 from "../images/road/road3.jpg"
import CalenderAndRoutes from "./../Modals/CalenderAndRoutes"

const StreetContainer = () => {
  const classes = styles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Box>
      <Box className={classes.container}>
        <Box onClick={handleOpen}>
          <Street road="19 Liberty St, New York, NY 10045, USA" bg={road1} />
        </Box>

        <Box onClick={() => navigate("/road2")}>
          <Street
            road="10, Jalan Tiga, 55200 Kuala Lumpur, Malaysia"
            bg={road2}
          />
        </Box>
        <Box onClick={() => navigate("/road3")}>
          <Street road="19 Liberty St, New York, NY 10045, USA" bg={road3} />
        </Box>
      </Box>

      <CalenderAndRoutes open={open} handleClose={handleClose} />
    </Box>
  )
}
const styles = makeStyles({
  container: {
    display: "flex !important",
  },
})

export default StreetContainer
