import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import rateData from '../modalData/rates.json';





const Home = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '100vh' }}>
      <Table sx={{ minWidth: 320 }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align="left" >Item</TableCell>
            <TableCell align="right">Rates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rateData.map((rate) => (
            <TableRow key={`${rate.category} - ${rate.brand} - ${rate.others}`}>
              <TableCell component="th" scope="row">
                {`${rate.category} - ${rate.brand} - ${rate.others}`}
              </TableCell>
              <TableCell align="right">{`${rate.rate} / ${rate.unit}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default Home;
