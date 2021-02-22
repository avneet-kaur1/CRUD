import React, { Component } from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Box, FormControl, InputLabel, TextField } from '@material-ui/core';
// import FormHelperText from '@material-ui/core/FormHelperText'
// import { spacing } from '@material-ui/system';

// import IconButton from '@material-ui/core/IconButton';

  
class Form11 extends Component {
    render() {
       
        return (
            <Box 
                boxShadow={21}
                bgcolor="background.paper"
                // m={1}
                // p={1}
                // style={{ width: '30rem', height: '30rem' }}
                // margin="auto"
                // display="flex"
            >
                <FormControl id="Form">
                  
                
                <FormControl>
                    {/* <InputLabel> Product Name:    </InputLabel> */}
                  <Box my={1}  mx="auto">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        onBlur={() => this.props.validator.showMessageFor('productname')}
                        id="productname"
                        value={this.props.newProductname}
                        type="text"
                        name="productname"
                        placeholder="Product Name"
                        onChange={this.props.handleInputChange}
                        />
                  </Box> 
                    {this.props.validator.message('productname', this.props.newProductname, 'required|alpha')} 
                </FormControl>

                <FormControl>
                    {/* <InputLabel> Price:   </InputLabel> */}
                  <Box my={2}  mx="auto">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        placeholder="Price"
                        onBlur={() => this.props.validator.showMessageFor('price')}
                        id="price"
                        value={this.props.newPrice}
                        type="number"
                        name="price"
                        onChange={this.props.handleInputChange}
                        />  
                  </Box>
                    {this.props.validator.message('price', this.props.newPrice, 'required')}
                </FormControl>

                <FormControl>
                  <Box my={2}  mx="auto">
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Description"
                        onBlur={() => this.props.validator.showMessageFor('description')}
                        id="description"
                        name="description"
                        rows="4"
                        cols="50"
                        value={this.props.newDescription}
                        onChange={this.props.handleInputChange}
                        />
                  </Box>
                    {this.props.validator.message('description', this.props.newDescription, 'required|alpha_num_dash_space')}
                </FormControl>

                <FormControl>
                  <Box my={5}  mx="auto">
                    <Input
                       type="file"
                       onChange={this.props.handleImageChange}>
                    </Input>
                    {/* <InputLabel htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                        Upload
                        </Button>
                    </InputLabel>
                    <Input accept="image/*" ="form-button" id="icon-button-file" type="file" />
                    <InputLabel htmlFor="icon-button-file"></InputLabel> */}
                   </Box>
                </FormControl>

                <FormControl >
                    <Button
                        aria-describedby={this.id}
                        variant="contained"
                        color="primary"
                        onClick={this.props.handleClick}
                        > 
                        SUBMIT
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
                        }}>
                        <FormControl>
                            <p> DO YOU WANT TO SUBMIT THE FORM ? </p>
                            <Button onClick={this.props.handleClose} color="primary">
                            Disagree
                            </Button>
                            <Button onClick={this.props.handleFormSubmit} color="primary">
                            Agree
                            </Button>
                        </FormControl>
                    </Popover>

                </FormControl>
                </FormControl>   
            </Box>
            
        );
    }
}
export default Form11