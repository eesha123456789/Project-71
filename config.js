import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDbay3IekqMsof77LwhnUmrzKpNyisk5_s",
  authDomain: "project-71-2738c.firebaseapp.com",
  projectId: "project-71-2738c",
  storageBucket: "project-71-2738c.appspot.com",
  messagingSenderId: "965906544892",
  appId: "1:965906544892:web:1e0787d19fd99a75d1bf79"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

