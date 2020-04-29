import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCJjwuPIQM70t02mHO-PlfcaTS7DAh8-7E",
  authDomain: "redux-marioplan-c0e63.firebaseapp.com",
  databaseURL: "https://redux-marioplan-c0e63.firebaseio.com",
  projectId: "redux-marioplan-c0e63",
  storageBucket: "redux-marioplan-c0e63.appspot.com",
  messagingSenderId: "306011722870",
  appId: "1:306011722870:web:047fcee32baf22e5153b57",
  measurementId: "G-61HS0YK38H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
// .settings({ timestampsInSnapshots: true})
// firebase.analytics();
export default firebase;