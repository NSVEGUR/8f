import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7VC8TWRLHLYnTJLutHfWPptpLPmH8YB8",
  authDomain: "travelconnect-7cb62.firebaseapp.com",
  projectId: "travelconnect-7cb62",
  storageBucket: "travelconnect-7cb62.appspot.com",
  messagingSenderId: "165540558045",
  appId: "1:165540558045:web:34d239ac67c7f18c6bd734",
  measurementId: "G-3F6X23QQZW",
};

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
