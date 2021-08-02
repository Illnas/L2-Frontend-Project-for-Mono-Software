import firebase from "firebase"


const config = {
  apiKey: "AIzaSyATAYCyAcLroXeB2TNoGXq91geDB87sf9M",
  authDomain: "vehicles-81c7d.firebaseapp.com",
  projectId: "vehicles-81c7d",
  storageBucket: "vehicles-81c7d.appspot.com",
  messagingSenderId: "243455418547",
  appId: "1:243455418547:web:6238fb312a53b79989d0c6"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;
