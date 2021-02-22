import React, { Component } from 'react'
import './App.css'; 
import Form11 from './components/Form11'
import Table11 from './components/Table11'

import firebase from '../src/firebase';
import {storage} from './firebase';
import SimpleReactValidator from 'simple-react-validator';
// import { makeStyles } from "@material-ui/core/styles";
// import Popover from "@material-ui/core/Popover";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";


class App extends Component {
  constructor() {
    super()

    this.state = {
      image: null,
      productname: '',
      description: '',
      price: '',
      key: '',
      items: {},
      url: '',
      anchorEl: null,
      open: false,
      id: undefined,
      classes:''
    }
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  handleClick(event) {
    this.setState({anchorEl: event.currentTarget, open: Boolean(event.currentTarget), id: "simple-popover"});
  }

  handleClose(event) {
    this.setState({anchorEl: event.currentTarget, open: false, id: undefined});
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    e.preventDefault();
  };

  handleImageChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      console.log(image)
      console.log(e)
    }
    e.preventDefault();
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {

    let items = this.state.items;
      
    var product = {
      productname:this.state.productname,
      description:this.state.description,
      price:this.state.price
    };
      
      console.log(">>>>", product)
      
    const { image } = this.state;
    const uploadImage = storage.ref(`images/${image.name}`).put(image);
    console.log("-----")   
    uploadImage.on('state_changes',
      (snapshot) => {
        //---
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          
          product['url'] = url;

          let newPostKey = '';
          if (this.state.key) {
            newPostKey = this.state.key;
          } else {
            newPostKey = firebase.database().ref().child('products').push().key;
          }
        
          let updates = {};
          updates['/products/' + newPostKey] = product;
          firebase.database().ref().update(updates);
          items[newPostKey] = product;
          this.setState({
            items
          });
          this.setState({
            key: '',
            productname: '',
            description: '',
            price: ''
          }); 
            
          alert('You submitted the form!');
        });
    });
      } else {
        this.validator.showMessages();
        this.forceUpdate();
      }
   
  };
  
  deleteProduct=(key)=>{
    console.log(key)
    var recentPostsRef = firebase.database().ref('products');
    recentPostsRef.child(key).remove()
    .then(function () {
      console.log("------------------------Remove succeeded. -------------------------------")
    })
    .catch(function(error) {
      console.log("----------------Remove failed: >>>>>>>>" + error.message)
    });

    let items = this.state.items;
    delete(items[key]);
    this.setState({
      items:items
    })
   
  };

  editProduct = (key) => {
    let product = this.state.items[key];
    this.setState({
      productname: product.productname,
      description: product.description,
      price: product.price,
      url: product.url,
      key: key,
    })
  };

  componentDidMount(){
    var recentPostsRef = firebase.database().ref('products').limitToLast(100);
    recentPostsRef.once('value', (snapshot) => {
      let data = {};
      snapshot.forEach((snapshot) => {
        data[snapshot.key] = snapshot.val();
      });
      this.setState({ items: data })
    });
  };

  render() {
    return (
      <div className="App">
        
        
        <Form11
          handleFormSubmit={this.handleFormSubmit} 
          handleInputChange={this.handleInputChange}
          handleImageChange={this.handleImageChange}
          handleClick={this.handleClick}
          handleClose={this.handleClose}
          validator = {this.validator}
          updateData = {this.updateData}
          key={this.state.key}
          url={this.state.url}
          newProductname={this.state.productname}
          newDescription={this.state.description} 
          newPrice={this.state.price}
          productnameError={this.state.productnameError}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          id={this.state.id}
         classes={this.state.classes}
        />

        <Table11
          items={this.state.items}
          url={this.state.url}
          editProduct = {this.editProduct}
          deleteProduct = {this.deleteProduct}
        />      
      </div>
    );
  }
}

export default App