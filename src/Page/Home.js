import { useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getData from '../action/getData';

const Home = (props) => {
  const { data, apiState } = props || {};
  const dataIds = Object.keys(data);
  const stockRates = [];
  dataIds.forEach((element) => {
    stockRates.push(props.data[element]);
  });
  useEffect(() => {
    props.getData();
  });

  if (apiState !== 'SUCCESS') {
    return <h1>Loading ...</h1>;
  }

  if (stockRates.length === 0) {
    return <h1>No Data Found</h1>;
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '100vh' }}>
      <Table sx={{ minWidth: 320 }} stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Item</TableCell>
            <TableCell align='right'>Rates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockRates.map((rate) => (
            <TableRow key={rate.id}>
              <TableCell component='th' scope='row'>
                {`${rate.category} - ${rate.brand} - ${rate.others}`}
              </TableCell>
              <TableCell align='right'>{`${rate.rate} / ${rate.unit}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => {
  const { itemRateReducer } = state || {};
  return {
    ...itemRateReducer,
  };
};

export default connect(mapStateToProps, { getData })(Home);
