import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0 5px'
  },
  img: {
    height: 350,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    objectFit: 'cover',
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      height: '200px'
    }
  }
}));
