import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Crudhooks() {
    const [form, setValues] = useState({
        image: null,
        productname: '',
        description: '',
        price: '',
        key: '',
        items: {},
        url:'',
    })

    setValues({
        …form,
         image: null,
        productname: '',
        description: '',
        price: '',
        key: '',
        items: {},
        url:'',
       })
    return (
        <div id="Table">
        <table className="container" border="1">
          <tbody>
            <tr className="table-group">
              <th className="table-control">Image</th>
              <th className="table-control">Product Name</th>
              <th className="table-control">Descripton</th>
              <th className="table-control">price</th>
              <th className="table-control">Actions</th>
            </tr>
            {Object.entries(items).map(([key, value], i) => {
              return (
                <tr key={key} className="table-group">
                  <td className="table-control">
                  <img src={value.url || 'https://via.placeholder.com/200x250'} alt="upload"  height="80" width="100"/>
                  </td>
                  <td className="table-control">{value.productname}</td>
                  <td className="table-control">{value.description}</td>
                  <td className="table-control">{value.price}</td>
                  <td className="table-control"> 
                    <button type="submit" onClick={(e)=>this.props.editProduct(key,e)}>Edit</button>
                    <button type="button" onClick={(e) => this.props.deleteProduct(key)}>Delete</button>
                  </td> 
                </tr> 
              );
            })}
          </tbody>
        </table>
            <hr/>
      </div>
        
            <hr/>
        
        
            <div id="Form">

              <form onSubmit={handleFormSubmit}>

                <div className="form-group">
                    <label>
                        <input type="file" onChange={handleImageChange}  ></input><br/>
                    </label>
                    </div>
                 
                <div className="form-group">
                    <label> Product Name:
                    <input className="form-control" onBlur={() => validator.showMessageFor('productname')} id="productname" value={newProductname} type="text" name="productname" onChange={handleInputChange} />
                    </label>
                    {validator.message('productname', newProductname, 'required|alpha')}
                    </div>

                <div className="form-group">
                    <label> Description:
                    <textarea className="form-control" onBlur={() => validator.showMessageFor('description')} id="description" name="description" rows="4" cols="50" value={newDescription} onChange={handleInputChange} />
                    </label>
                    {validator.message('description', newDescription, 'required|alpha_num_dash_space')}
                    </div>

                <div className="form-group">
                    <label> Price:
                    <input className="form-control"  onBlur={() => validator.showMessageFor('price')} id="price" value={newPrice} type="number" name="price" onChange={handleInputChange}/>  
                    </label>
                    {validator.message('price', newPrice, 'required')}
                    </div>

                <div className="form-group">
                    <label> Click Here To Submit The Product Details:
                    <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}> Open Popover </Button> </label>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}></Popover> 
                    <Typography className={classes.typography}>The content of the Popover.</Typography>
                    </div>

              </form>   
                
            </div>
        );
    }
}
export default Crudhooks