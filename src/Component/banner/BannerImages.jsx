import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Paper from '@material-ui/core/Paper';
import { sport, casino } from './BannerImages.const';

import useStyles from './BannerImages.styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function BannerImages(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep] = useState(0);
  const { isCasinoPage } = props;
  const tutorialSteps = isCasinoPage ? casino : sport;
  return (
    <Paper className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <Paper key={`players-images-${step.id}`}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={`players-images-${index}`} />
            ) : null}
          </Paper>
        ))}
      </AutoPlaySwipeableViews>
    </Paper>
  );
}

BannerImages.defaultProps = {
  isCasinoPage: false
};

// BannerImages.propTypes = {
//   isCasinoPage: PropTypes.bool
// };

export default BannerImages;
