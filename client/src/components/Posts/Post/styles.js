import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px',
    marginTop: '05px',
  },
  days :{
    color: 'white',
  },
  title: {
    padding: '0 16px',
    marginTop: "-80px",
    fontWeight: "bold",
    color: "white",
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  message: {
    fontSize: "1rem"
  },
  city: {
    fontSize: "1.rem",
    padding: "0",    
    color: "white",
  },
  cityCard: {
    paddingBlock: "0",
    marginTop: "-5px",
  },
  spotsCard: {
    paddingBlock: "0",
    marginTop: "-10px",
    
  },
  spots: {
    fontSize: "1.rem",
    padding: "0",
    color: "white",
    marginTop: "-22px",
    marginLeft: "140px",
  },
  
});