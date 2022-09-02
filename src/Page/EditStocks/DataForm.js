import { useState } from 'react';
import { Timestamp } from 'firebase/firestore';

import { TextField, Button } from '@mui/material';

const DataForm = ({
  categoryDetail = '',
  brandDetail = '',
  otherDetails = '',
  rateDetail = '',
  unitDetail = '',
  remainingStock = '',
  onSubmitAction,
}) => {
  const [category, setCategory] = useState(categoryDetail);
  const [brand, setBrand] = useState(brandDetail);
  const [other, setOther] = useState(otherDetails);
  const [rate, setRate] = useState(rateDetail);
  const [unit, setUnit] = useState(unitDetail);
  const [stockStore, setStock] = useState(remainingStock); // in kg

  const textStyle = {
    margin: 8,
  };

  const disabledStatus = !(
    category.length > 0 &&
    brand.length > 0 &&
    other.length > 0 &&
    !isNaN(rate) &&
    unit.length > 0
  );
  const stockData = {
    category,
    brand,
    others: other,
    rate,
    unit,
    stockStore,
    updatedAt: Timestamp.now(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitAction(stockData);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 600,
        minWidth: 320,
      }}
    >
      <TextField
        style={textStyle}
        variant='outlined'
        label='Category'
        id='outlined-size-small'
        value={category}
        fullWidth
        onChange={(e) => setCategory(e.target.value)}
      />
      <TextField
        style={textStyle}
        variant='outlined'
        label='Brand'
        id='outlined-size-small'
        value={brand}
        fullWidth
        onChange={(e) => setBrand(e.target.value)}
      />
      <TextField
        style={textStyle}
        variant='outlined'
        label='Other'
        id='outlined-size-small'
        value={other}
        fullWidth
        onChange={(e) => setOther(e.target.value)}
      />
      <TextField
        style={textStyle}
        variant='outlined'
        label='Rate'
        id='outlined-size-small'
        value={rate}
        fullWidth
        onChange={(e) => {
          const rateValue = parseInt(e.target.value, 10);
          if (!isNaN(rateValue)) {
            setRate(rateValue);
          }
        }}
      />
      <TextField
        style={textStyle}
        variant='outlined'
        label='Unit'
        id='outlined-size-small'
        value={unit}
        fullWidth
        onChange={(e) => setUnit(e.target.value)}
      />
      <TextField
        style={textStyle}
        variant='outlined'
        label='Stock'
        id='outlined-size-small'
        value={stockStore}
        fullWidth
        onChange={(e) => setStock(e.target.value)}
      />
      <div>
        <Button
          variant='contained'
          disabled={disabledStatus}
          onClick={handleSubmit}>
          Add Data
        </Button>
      </div>
    </div>
  );
};

export default DataForm;
