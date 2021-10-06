import * as React from 'react';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell , { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const socket = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr")

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function createData(name, calories, fat, carbs, protein) {

  return { name, calories, fat, carbs, protein };
}



export default function BasicTable({handleclick}) {
 const [btc,setbtc] = React.useState(0)
 const [bnb,setbnb] = React.useState(0)
 const [eth,seteth] = React.useState(0)
 const [btc_per,setBTC_per] = React.useState(0)
 const [eth_per,setETH_per] = React.useState(0)
 const [sol_per,setSOL_per] = React.useState(0)
 const [bnb_per,setBNB_per] = React.useState(0)
 const [sol,setsol] = React.useState(0)
//  const [demo,setDemo]=React.useState(false)
 socket.onmessage = evt => {
    const g = JSON.parse(evt.data)
    for(let i=0;i<g.length;i++){
        if(g[i]["s"]=="BTCUSDT"){
            setbtc(parseFloat(g[i]["c"]).toFixed(5))
            const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
            setBTC_per(temp)
        }
        else if(g[i]["s"]=="SOLUSDT"){
            setsol(parseFloat(g[i]["c"]).toFixed(5))
            const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
            setSOL_per(temp)
        }
        else if(g[i]["s"]=="BNBUSDT"){
            setbnb(parseFloat(g[i]["c"]).toFixed(5))
            const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
            setBNB_per(temp)
        }
        else if(g[i]["s"]=="ETHUSDT"){
            seteth(parseFloat(g[i]["c"]).toFixed(5))
            const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
            setETH_per(temp)
        }
    }
}
    const rows = [
        createData('Bitcoin (BTC)', '55%', (73334.3105*btc)/50000, `${btc_per}%`),
        createData('Ethereum (ETH)', '25%', (33333.7775*eth)/3200, `${eth_per}%`),
        createData('SOlana (SOL)', '10%', (1333.511*sol)/150,`${sol_per}%`),
        createData('Tether (USDT)', '10%', (1333.511),0),
      ];
  return (
      <>
      {/* <button onClick={handleclick()}>View our services</button> */}
      <h1 style={{textAlign:"center"}}>Demo Portfolio </h1>

      <br/>
      <br/>

      <h1 style={{textAlign:"center"}}> Total Estimated value: <span style={{color:"gold"}}>$  {parseFloat(parseFloat((73334.3105*btc)/50000)+parseFloat((33333.7775*eth)/3200)+parseFloat((1333.511*sol)/150)+parseFloat(1333.511)).toFixed(3)}</span> <span style={{fontSize:"16px",fontWeight:"lighter"}}>~ ₹{parseFloat(parseFloat((73334.3105*btc)/50000)+parseFloat((33333.7775*eth)/3200)+parseFloat((1333.511*sol)/150)+parseFloat(1333.511)).toFixed(3)*75} </span>  </h1>
      <br/>
      <h2 style={{textAlign:"center"}}>Holder name : Siddarth Soni</h2>
      <br/>
      <h3 style={{textAlign:"center"}}>Unlock Date : 06/04/2022</h3>
      <br/>
    <TableContainer style={{marginLeft:"40px"}} >
      <Table sx={{ minWidth: 10 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Asset (Cryptocurrency)</StyledTableCell>
            <StyledTableCell align="right">Percentage of Total</StyledTableCell>
            <StyledTableCell align="right">Estimated value in ($)</StyledTableCell>
            <StyledTableCell align="right">Gain/Loss</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right" style={{color:parseFloat(row.carbs) > 0 ? "green" : "red"}}>{row.carbs}</StyledTableCell>
              <StyledTableCell align="right" style={{color:"green"}}><span style={{color:"green"}}>{row.protein}</span></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
