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
    left: '5px',
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
    marginTop: '5px',
    paddingLeft: '20px',
  },
  days :{
    color: 'white',
  },
  title: {
    padding: '0 16px',
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
    fontSize: "1rem",
    padding: "0",
  },
  messageCard: {
    paddingBlock: "0.25rem",
    
  },
  city: {
    fontSize: "1.1rem",
    padding: "0",    
    color: "white",
  },
  cityCard: {
    paddingBlock: "0",
    marginTop: '-10px'
    
  },
  spotsCard: {
    paddingBlock: ".25rem",
    marginTop: ".5rem"
   
    
  },
  spots: {
    fontSize: "1.1rem",
    padding: "0",
    
  },
  name: {
    fontSize: "1.1rem",
    padding: "0",
    color: "white",
    marginTop: '-80px',
    marginLeft: '20px',
  },
  time: {
    fontSize: "1rem",
    padding: "0",
    color: "white",
    marginLeft: '20px',
  },
  
});