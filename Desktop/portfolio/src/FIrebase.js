import firebase from "firebase" 


    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA2lAMANRJkDKJc3gvvXiZssfenMXE-vPw",
    authDomain: "react-contactme-form.firebaseapp.com",
    databaseURL: "https://react-contactme-form-default-rtdb.firebaseio.com",
    projectId: "react-contactme-form",
    storageBucket: "react-contactme-form.appspot.com",
    messagingSenderId: "992744676285",
    appId: "1:992744676285:web:d497fa06cbbe39046310d4"
  };

firebase.initializeApp(firebaseConfig);

 

export {db }