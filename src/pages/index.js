import { Typography } from "@mui/material"
import * as React from "react"
import Employee from "../components/Employee"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StreetContainer from "./../container/StreetContainer"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Typography align="center" variant="h4">
      {" "}
      STREET
    </Typography>
    <StreetContainer />

    {/* <Employee/> */}
  </Layout>
)

export default IndexPage
