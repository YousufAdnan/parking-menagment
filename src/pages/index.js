import { Typography } from "@mui/material"
import * as React from "react"
import Employee from "../components/Employee"


import Layout from "../components/layout"
import Seo from "../components/seo"
import StreetComp from "../components/StreetComp"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Typography align="center" variant="h4"> STREET</Typography>
  <StreetComp/>
 
{/* <Employee/> */}
  </Layout>
)

export default IndexPage
