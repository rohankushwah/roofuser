import React, { useCallback, useState } from "react";
// Mui Core
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
// import Favorites from '../../../containers/favourites';
// Styling
import useStyles from "./LeftSideBar.styles";

function LeftSideBar({ renderById }) {
  const classes = useStyles();
  return (
    <Paper className={classes.leftRoot}>
      <Box id="side-navbar" className="side-navbar fade1">
        <nav className="side-multilevel">
          <Box
            className="sports__content sports__content_sm"
            style={{ height: "45px" }}
          >
            <Box>
              <Button
                color="primary"
                startIcon={<EmailIcon />}
                className={classes.enquiry}
              >
                Enquiry
              </Button>
            </Box>
          </Box>

          <Paper m={5} />
        </nav>
      </Box>
    </Paper>
  );
}

export default LeftSideBar;
