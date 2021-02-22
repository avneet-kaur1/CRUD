import React from 'react';
import {storage} from '../firebase';

class Imageupload extends React.Component{
    constructor(){
        super()

        this.state={
            image:null,
            url:'',
         }
        //  this.handleImageChange=this.handleImageChange.bind(this);
        //  this.handleImageUpload=this.handleImageUpload.bind(this);
    }

    handleImageChange=(e)=>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() =>( {image}));
            console.log(image)
            console.log(e)
        }
    }
    
    handleImageUpload = () =>{
        const {image} =this.state;
        const uploadImage = storage.ref(`images/${image.name}`).put(image);
        console.log("-----")
        uploadImage.on('state_changes',
        (snapshot)=>{
            //---
        },
        (error)=>{
            console.log(error);
        },
        ()=>{
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(">>>>", url)
                this.setState({url})
            })
        });
    }

  

    render(){
        return(
            <div>
                {/* <input type="file" onChange={this.handleImageChange}></input>
                <button onClick={this.handleImageUpload}>Upload Image</button>
            <br/>
            <img src={this.state.url || 'https://via.placeholder.com/150x150'} alt="uploaded" height="200" width="200" /> */}
            </div>
        )
       
    }
}
export default Imageupload;