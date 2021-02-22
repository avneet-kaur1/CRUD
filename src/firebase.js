import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDdqoDPbttGMENSYjIFc_nWBvSXoJ8SwFs",
  authDomain: "react-crud-3906a.firebaseapp.com",
  databaseURL: "https://react-crud-3906a-default-rtdb.firebaseio.com",
  projectId: "react-crud-3906a",
  storageBucket: "react-crud-3906a.appspot.com",
  messagingSenderId: "76668552142",
  appId: "1:76668552142:web:4c8860159edaa81f0ce19f",
  measurementId: "G-B1T0L00F1F"
  };
  
 

  firebase.initializeApp(firebaseConfig);  
  const storage = firebase.storage();
export{
  storage, firebase as default
}
// export default firebase 