import Button from '@material-ui/core/Button';

export default function buttonFacilitator(props) {
  
    return (
      <Button variant="contained" color="primary" onClick={props.accountCreation}>
        {props.text}
      </Button>
    );
  }