import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import find from 'lodash.find';
import { slice } from 'lodash';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { Banner } from '../banner/index';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
// import Header from '../../containers/header';
import useStyles from './Home.styles';
// import Advertisements from '../../components/Advertisements';
// import MobBetSlip from '../MobBetSlip';
// import ResponsiveSidebar from '../../components/ResponsiveSidebar';
// import Footer from '../../components/footer';


// let sportEventInterval;

// const a11yProps = (index) => {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`
//   };
// };

const Home =()=> {
  
  const classes = useStyles();
  
    return (
      // <React.Fragment>
     <div style={{marginTop : '20px'}}>
      {/* <Header /> */}
        <Grid container classsName={classes.root}>
          <Grid item xs={12} md={3} lg={2} className={classes.webViewPage}>
            <LeftSideBar />
          </Grid>
          <Grid item xs={12} md={6} lg={8} className={classes.details}>
            {/* <Grid className={classes.mobViewPage}>
              <ResponsiveSidebar />
            </Grid> */}
              <>
                <Banner />
               
              </>
          </Grid>
          <Grid item xs={12} md={3} lg={2} className={classes.betslipContainer}>
            {/* {!showSlipBtn && <Betslip />} */}
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
  
}
export default Home;
