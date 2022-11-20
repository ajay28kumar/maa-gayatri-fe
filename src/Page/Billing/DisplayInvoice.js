import React from 'react';
import { connect } from 'react-redux';
import { Card,  Button, Dialog} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import getData from '../../action/getData';
import { userAction } from '../../constant';
import InVoiceBuilder from './InVoiceBuilder';

const DisplayInvoice = (props) => {
    const { data, apiState, getDataRequest } = props || {};
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        if(apiState!==userAction.SUCCESS){
            getDataRequest()
        }
    },[apiState, getDataRequest]);
    const stockItems = [];
    const dataIds = Object.keys(data);
    dataIds.forEach((element) => {
        stockItems.push(props.data[element]);
    });
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card raised style={{width: '90%', minWidth: 280, margin: 16}}>
            <h1>
                DisplayInvoice
            </h1>
            <div style={{display: "flex", alignItems: "center",flexDirection: 'column',padding: 16}}>
                <Button variant="contained" endIcon={<AddIcon />} onClick={handleClickOpen}>
                    Add More
                </Button>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <InVoiceBuilder stockItems={stockItems}/>
            </Dialog>
        </Card>
    )
}

const mapStateToProps = (state) => {
    const { itemRateReducer, userProfile } = state || {};
    const {isLoggedIn} = userProfile || {}
    return {
      ...itemRateReducer,
      isLoggedIn
    };
  };
  
export default connect(mapStateToProps, { getDataRequest: getData })(DisplayInvoice);
