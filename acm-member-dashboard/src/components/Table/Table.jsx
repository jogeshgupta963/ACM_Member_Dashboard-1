import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import img2 from "../../imgs/img2.png"; 
import img1 from "../../imgs/Rectangle2.png";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData(img1, 1, "Rishika", 100),
  createData(img2, 2, "Tushar", 99),
  createData(img1, 3, "Yashvi", 98),
  createData(img2, 4, "Harman", 97),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      
      color: 'black',
    }
  }
  else if(status === 'Pending')
  {
    return{
      
      color: 'black',
    }
  }
  else{
    return{
      
      color: 'black',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h1>Leaderboard</h1>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029", borderRadius: 10 }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{color: "#5AAAFA", fontSize: 20}} align="left">Profile</TableCell>
                <TableCell style={{color: "#5AAAFA", fontSize: 20}} align="left">Rank</TableCell>
                <TableCell style={{color: "#5AAAFA", fontSize: 20}} align="left">Name</TableCell>
                <TableCell style={{color: "#5AAAFA", fontSize: 20}} align="left">Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={row.name} className="imgs" alt="img" />
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
