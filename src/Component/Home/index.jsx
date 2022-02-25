import React from 'react';
import { slice } from 'lodash';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { Banner } from '../banner/index';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
// import Header from '../../containers/header';
import useStyles from './Home.styles';
import './style.css';
import '../../style.css'

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
            <div className='headingCard centerText'>
            <h1>We Are My Roofing</h1>
            <h2>Leading Roof Construction Companies...  </h2>
            </div> 
              <>
                <Banner />
               
              </>
          </Grid>
          <Grid item xs={12} md={3} lg={2} className={classes.betslipContainer}>
            {/* {!showSlipBtn && <Betslip />} */}
            <div className="headingCard centerText ml-10 mt-30">
            <h2>Why we are expert</h2>
            <p>We have a extraordinary team that understand client requirement, We have excelant skillful person, Our goal is to serve good service. </p>
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
  
}
export default Home;
