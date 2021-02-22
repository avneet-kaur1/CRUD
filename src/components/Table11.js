import React, { Component } from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table"
import { Box, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

class Table11 extends Component {
  render() {
    const items = this.props.items; 
    return ( 
      <TableContainer id="Table"> 
          <Box
           boxShadow={21}
           bgcolor="background.paper"
           m={1}
           p={1}
           style={{ }}
           margin="auto"
           display="flex"
          > 
        
        <Table className="container" border="1">
          <TableBody>
            <TableRow className="table-group">
              <TableCell className="table-control">Image</TableCell>
              <TableCell className="table-control">Product Name</TableCell>
              <TableCell className="table-control">Price</TableCell>
              <TableCell className="table-control">Descripton</TableCell>
              <TableCell className="table-control">Actions</TableCell>
            </TableRow>
            {Object.entries(items).map(([key, value], i) => {
              return (
                <TableRow key={key} className="table-group">
                  <TableCell className="table-control">
                  <img src={value.url || 'https://via.placeholder.com/200x250'} alt="upload"  height="80" width="100"/>
                  </TableCell>
                  <TableCell className="table-control">{value.productname}</TableCell>
                  <TableCell className="table-control">{value.price}</TableCell>
                  <TableCell className="table-control">{value.description}</TableCell>
                  <TableCell className="table-control"> 
                    {/* <button type="submit" onClick={(e)=>this.props.editProduct(key,e)}>Edit</button> */}
                    <Button
                      aria-describedby={this.id}
                      variant="outlined"
                      color="primary"
                      onClick={(e)=>this.props.editProduct(key,e)} 
                      > 
                      EDIT
                    </Button>
                    {/* <button type="button" onClick={(e) => this.props.deleteProduct(key)}>Delete</button> */}
                   
                    <Button
                      aria-describedby={this.id}
                      variant="outlined"
                      color="primary"
                      onClick={(e) => this.props.deleteProduct(key)}
                      > 
                      DELETE
                    </Button>
                
                    <Popover
                      id={this.id}
                      open={this.props.open}
                      anchorEl={this.props.anchorEl}
                      onClose={this.props.handleClose}
                      anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center"
                      }}
                      transformOrigin={{
                          vertical: "top",
                          horizontal: "center"
                      }}
                      >
                    {/* <Typography >
                    <div>The content of the Popover.</div>
                    </Typography>  */}
                    <div>
                      <p> DO YOU WANT TO DELETE ? </p>
                      <Button onClick={this.props.handleClose} color="primary">
                      Disagree
                      </Button>
                      <Button onClick={this.props.deleteProduct} color="primary">
                      Agree
                      </Button>
                    </div>
                    </Popover>
                  </TableCell> 
                </TableRow> 
              );
            })}
          </TableBody>
        </Table>
          <hr />
          </Box>
          </TableContainer>
         
      
    );
  }
}

export default Table11