import { Card } from '@mui/material';
const PersonalDetails = ({ personalDetails }) => {
    return (
        <Card raised style={{width: '90%', minWidth: 280, margin: 16}}>
            <div style={{ display: "flex", justifyContent: "space-between", margin: 16}}>
                <div>
                    <b> Name : </b> {personalDetails.customerName}
                </div>
                <div>
                    <b>Date:</b> {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: 16}}>
                <div>
                    <b> Contact Number : </b> {personalDetails.contactNumber}
                </div>
                <div>
                    <b>Time:</b> {new Date().getHours()}: {new Date().getMinutes()}
                </div>
            </div>
        </Card>
    )
}

export default PersonalDetails;