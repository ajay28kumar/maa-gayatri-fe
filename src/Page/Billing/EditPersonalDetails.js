import React from 'react';
import { TextField,Card, Button } from '@mui/material';


const EditPersonalDetails = ({onClickPersonalDetails}) => {
    const [customerName, setCustomerName] = React.useState("");
    const [contactNumber, setContactNumber] = React.useState("");
    const validInput = customerName.length >0 && contactNumber.toString().length ===10
    const personalDetails = {customerName,contactNumber, showPersonalDetails: true}
    return (
        <Card raised style={{width: '90%', minWidth: 280, display: "flex", alignItems: "center",flexDirection: 'column', padding:16, margin: 16}}>
            <TextField
            fullWidth
            label="Full Name"
            value={customerName}
            style={{margin: "8px 0"}}
            onChange={(e) => setCustomerName(e.target.value)}
            />
            <TextField
            fullWidth
            label="Contact Number"
            value={contactNumber}
            style={{margin: "8px 0"}}
            onChange={(e) => {
                const contactVal = e.target.value;
                if(contactVal===""){
                    setContactNumber(contactVal);
                }
                const contactValue = parseInt(contactVal, 10);
                if (!isNaN(contactValue)) {
                    setContactNumber(contactValue)
                }
            }}
            />
            <Button 
            fullWidth
            color="success" 
            variant="outlined"
            onClick={()=>onClickPersonalDetails(personalDetails)}
            disabled={!validInput}>
                Continue
            </Button>
        </Card>
    )
};

export default EditPersonalDetails;
