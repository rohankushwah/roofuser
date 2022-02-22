import React, { useCallback, useState } from 'react';
// Mui Core
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// Core
// import Favorites from '../../../containers/favourites';
// Styling
import useStyles from './LeftSideBar.styles';


function LeftSideBar({ renderById }) {
  const classes = useStyles();
  return (
    <Paper className={classes.leftRoot}>
      <Box id='side-navbar' className='side-navbar fade1'>
        <nav className='side-multilevel'>
          <Box className='sports__content sports__content_sm' style={{ height: '45px' }}>
            <Box>
              {/* <InputField
                inputClass={classes.search}
                variant='outlined'
                placeholder={t('searchHere')}
                value={sportsSearch}
                onChange={handleSportsSearch}
              /> */}
            </Box>
          </Box>
          {/* <Favorites /> */}
          <Paper m={5} />
          {/* <SportsListing
            featured={true}
            sports={topSports}
            allSports={sports}
            getLeaguesBySports={fetchLeaguesBySports}
          />
          <SportsListing
            featured={false}
            sports={sports}
            allSports={sports}
            getLeaguesBySports={fetchLeaguesBySports}
          /> */}
        </nav>
      </Box>
    </Paper>
  );
}

export default LeftSideBar;
