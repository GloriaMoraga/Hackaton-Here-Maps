import firebase from 'firebase/app';
import 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB1H0h34raCTUdfdLNFEqSqMAjSFe9I5pM",
    authDomain: "hackaton-here.firebaseapp.com",
    databaseURL: "https://hackaton-here.firebaseio.com",
    projectId: "hackaton-here",
    storageBucket: "hackaton-here.appspot.com",
    messagingSenderId: "504222735404",
    appId: "1:504222735404:web:2532bde7517389ad"
  };
  // Initialize Firebase
  class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }
  }
  
  export default Firebase;