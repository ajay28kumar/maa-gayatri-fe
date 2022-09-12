import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import EditIcon from '@mui/icons-material/EditOutlined';
import getData from '../../action/getData';
import { Box } from '@mui/system';

const Home = (props) => {
  let navigate = useNavigate();
  const { data, apiState, isLoggedIn,getData : getDataRequest } = props || {};
  const dataIds = Object.keys(data);
  const stockRates = [];
  dataIds.forEach((element) => {
    stockRates.push(props.data[element]);
  });
  useEffect(() => {
    getDataRequest();
  },[apiState,getDataRequest]);

  if (apiState !== 'SUCCESS') {
    return <h1>Loading ...</h1>;
  }

  if (stockRates.length === 0) {
    return <h1>No Data Found</h1>;
  }

  
  const onEditClick = (itemId) => navigate(`/edit-stocks/${itemId}`);

  return (
    <Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320 }} stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Item</TableCell>
            <TableCell align='right'>Rates</TableCell>
            {isLoggedIn && <TableCell align='right'>Remaining Stocks</TableCell>}
            {isLoggedIn && <TableCell align='right'>Created At</TableCell>}
            {isLoggedIn && <TableCell align='right'>Updated At</TableCell>}
            {isLoggedIn && <TableCell align='right'>Edit</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {stockRates.map((rate) => (
            <TableRow key={rate.id}>
              <TableCell component='th' scope='row'>
                {`${rate.category} - ${rate.brand} - ${rate.others}`}
              </TableCell>
              <TableCell align='right'>&#8377; {`${rate.rate} / ${rate.unit}`}</TableCell>
              {isLoggedIn && <TableCell align='right'>{`${rate.stockStore} ${rate.unit}`}</TableCell>}
              {isLoggedIn && <TableCell align='right'>{new Date(rate.createdAt.seconds * 1000).toDateString()}</TableCell>}
              {isLoggedIn && <TableCell align='right'>{new Date(rate.updatedAt.seconds * 1000).toDateString()}</TableCell>}
              {isLoggedIn && <TableCell align='right'><EditIcon onClick={()=>onEditClick(rate.id)}/></TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

const mapStateToProps = (state) => {
  const { itemRateReducer, userProfile } = state || {};
  const {isLoggedIn} = userProfile || {}
  return {
    ...itemRateReducer,
    isLoggedIn
  };
};

export default connect(mapStateToProps, { getData })(Home);
