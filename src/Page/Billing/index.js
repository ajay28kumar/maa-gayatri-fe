import React from 'react';
import EditPersonalDetails from './EditPersonalDetails';
import PersonalDetails from "./PersonalDetails";
import DisplayInvoice from './DisplayInvoice';

const Billing = () => {
    const [personalDetails, setPersonalDetails] = React.useState({})
    const {showPersonalDetails} = personalDetails || {};
    return (
        <div style={{display: 'flex', alignItems: "center", flexDirection: 'column'}}>
            {showPersonalDetails ? 
              <PersonalDetails personalDetails={personalDetails}/> :
              <EditPersonalDetails 
                onClickPersonalDetails={(details)=>setPersonalDetails(details)}
              />
            }
            {showPersonalDetails && <DisplayInvoice/>}
      </div>
    );
  };
  
  export default Billing;
  