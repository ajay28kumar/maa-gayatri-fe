import { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';


const InVoiceBuilder = (props) => {
    const [selectedItem, setSelectedItem] = useState({})
    const [quantity, setQuantity] = useState("")
    const searchItem = props.stockItems.map(stockItem => ({id: stockItem.id, label : `${stockItem.category} - ${stockItem.brand} - ${stockItem.others}`, ...stockItem}))
    console.log("searchItem : ", selectedItem);
    return (
        <div style={{height: 400, margin: 16}}>
            <div style={{display: 'flex'}}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={searchItem}
                    getOptionLabel={(option) => option.label}
                    sx={{ width: 300 }}
                    onChange={(e,value) => {
                        setSelectedItem(value);
                    }}
                    renderInput={(params) => <TextField {...params} label="Select Product" />}
                />
                {selectedItem.id && 
                    <>
                        <TextField id="outlined-basic" 
                            label={`Quantity in ${selectedItem.unit}`} 
                            placeholder={selectedItem.unit}
                            variant="outlined" 
                            value={quantity}
                            style={{margin: "0 8px"}}
                            onChange={(e) => {
                                const unitValue = e.target.value;
                                if(unitValue===""){
                                    setQuantity(unitValue);
                                }
                                const stockValue = parseInt(unitValue, 10);
                                if (!isNaN(stockValue)) {
                                setQuantity(stockValue);
                                }
                            }}
                        />
                        <TextPrint value={`${selectedItem.rate}/${selectedItem.unit}`}/>
                        <TextPrint value='&#x20b9;' overRideStyle={{margin: 0}}/>
                        <TextPrint value={`${selectedItem.rate * quantity}`}/>
                    </>
                }
            </div>
        </div>
    )
};

const TextPrint = ({value, overRideStyle}) => {
   return(
    <div style={{margin: "0 8px", display: "flex", alignItems: 'center', ...overRideStyle}}>
        {value}
    </div>
    )
};



export default InVoiceBuilder;
