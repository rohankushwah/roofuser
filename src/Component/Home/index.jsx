import React from "react";
import { Grid } from "@material-ui/core";

import { Banner } from "../banner/index";
import useStyles from "./Home.styles";
import "./style.css";
import "../../style.css";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EnquiryPopUp from '../../Container/Popup/EnquiryPopUp';
import '../../style.css'

const Home = () => {
  const classes = useStyles();

  return (
    // <React.Fragment>
    <div className="mt-20 pd-15">
      <Grid container classsName={classes.root}>
        <Grid item xs={12} md={3} lg={2} className={classes.webViewPage}>
          <div className="mb-10 centerText mt-30 mr-10">
          <EnquiryPopUp/>
            {/* <Button
              color="primary"
              className={classes.enquiry}
              variant="outlined"
              className="mb-10 mr-10"
            >
              Enquiry
            </Button> */}
         
            <Button
              color="primary"
              startIcon={<LocationOnIcon />}
              className={classes.enquiry}
              variant="outlined"
              className="mb-10 mr-10"
            >
              Locate us
            </Button>
         
          </div>
         
        </Grid>
        <Grid item xs={12} md={6} lg={8} className={classes.details}>
          {/* <Grid className={classes.mobViewPage}>
              <ResponsiveSidebar />
            </Grid> */}
          <div className="headingCard centerText">
            <h1>We Are My Roofing</h1>
            <h2>Leading Roof Construction Companies... </h2>

            <>
              <Banner />
            </>
          </div>
        </Grid>
        <Grid item xs={12} md={3} lg={2} className={classes.betslipContainer}>
          {/* {!showSlipBtn && <Betslip />} */}
          <div className="headingCard centerText ml-10 mt-30">
            <h2>Why we are expert</h2>
            <p>
              We have a extraordinary team that understand client requirement,
              We have excelant skillful person, Our goal is to serve good
              service.{" "}
            </p>
          </div>
          {/* <Grid style={{ marginTop: '60px' }}>
              <Advertisements pageName='home' />
            </Grid> */}
        </Grid>
      </Grid>
      {/* <Footer /> */}
      {/* {showSlipBtn && <MobBetSlip />} */}
      {/* </React.Fragment> */}
    </div>
  );
};
export default Home;
