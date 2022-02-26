import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    height: '100%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    padding: 0
  },
  leftRoot: {
    overflowX: 'hidden',
    padding: 10,
    // backgroundColor: 'inherit',
    boxShadow: 'inherit',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
    '& .listRoot .MuiTypography-root': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px'
      }
    },
    '& .side-navbar h6': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '16px'
      }
    },
    '& .side-navbar .side-multilevel span': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px'
      }
    }
  },
  search: {
    width: '100%',
    borderRadius: '25px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px'
    }
  },
  searchForm: {
    display: 'flex',
    justifyContent: 'center'
  },
 enquiry : {
    color : 'black',
    background : 'red',

  }
}));
