import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBm8zWofArp6DVK98vHXhd7gsaCIRxM49w",
  authDomain: "c-92-46e9c.firebaseapp.com",
  projectId: "c-92-46e9c",
  storageBucket: "c-92-46e9c.appspot.com",
  messagingSenderId: "830488630625",
  appId: "1:830488630625:web:dff2795cf65d0274a62120",
  measurementId: "G-WWE7RVVSN7"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
