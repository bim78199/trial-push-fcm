import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCklsb7X92WytS20IpGdPF1kzCEXr2suu8",
    authDomain: "push-notif-project-2dff1.firebaseapp.com",
    projectId: "push-notif-project-2dff1",
    storageBucket: "push-notif-project-2dff1.appspot.com",
    messagingSenderId: "429685922397",
    appId: "1:429685922397:web:6e2d80527f094271fb0bb4",
    measurementId: "G-MBZJFVX9VZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase;