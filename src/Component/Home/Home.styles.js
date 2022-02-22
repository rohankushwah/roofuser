import { ImportantDevices } from "@material-ui/icons";

export default (theme) => ({
  container: {},
  root: {
    backgroundColor: 'white',
  },
  details: {
    // height: '80vh',
    overflowY: 'hidden',
    backgroundColor: 'white',
    overflowX: 'hidden',
    padding: '10px 13px',
    // [theme.breakpoints.down('xs')]: {
    //   padding: '10px 0px'
    // }
  },
  betslipContainer: {
    backgroundColor: 'white',
  },
  betSlipCount: {
    position: 'fixed',
    zIndex: 999,
    bottom: '0px',
    left: 'auto',
    right: 'auto',
    margin: '0px auto',
    width: '100%',
    textAlign: 'center'
  },
  webViewPage: {
    display: 'none',
    
  },
  mobViewPage: {
    display: 'none',
  },
  extendedIcon: {
    // marginRight: theme.spacing(1)
  },
  leftRoot: {
    height: '80vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    padding: 10
  },
  search: {
    width: '100%',
    borderRadius: '25px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '25px'
    }
  },
  searchForm: {
    display: 'flex',
    justifyContent: 'center'
  },
  activeTabMatch: {
    '& button': {
      color: '#8388A6',
      fontSize: '24px',
      fontWeight: '700',
      textTransform: 'capitalize'
    },
    '& .Mui-selected': {
      color: '#ffffff',
      backgroundColor: 'inherit',
      borderBottom: '0px'
    },
    '& span': {
      backgroundColor: 'inherit'
    }
  },
  tabsDetails: {
    '& .MuiTabs-flexContainer': {
      padding: '10px 0px',
    },
    '& button': {
      fontSize: '24px',
      textTransform: 'capitalized',
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '18px'
      // },
      // [theme.breakpoints.down('xs')]: {
      //   fontSize: '15px'
      // }
    },
    '& .Mui-selected': {
      color: '#ffffff',
      backgroundColor: '#D14338',
      borderBottom: `2px solid black`
    },
    '& .MuiTabs-indicator': {
      backgroundColor: 'inherit'
    }
  }
});
