// config.js
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "project-id.firebaseapp.com", 
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id"
};

firebase.initializeApp(firebaseConfig);
