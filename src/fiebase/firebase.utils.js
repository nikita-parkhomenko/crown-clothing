import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1fAPg94AtNCVt9jikqCViJhoFygdrxZM",
    authDomain: "crown-db-44b75.firebaseapp.com",
    databaseURL: "https://crown-db-44b75.firebaseio.com",
    projectId: "crown-db-44b75",
    storageBucket: "crown-db-44b75.appspot.com",
    messagingSenderId: "993304807782",
    appId: "1:993304807782:web:2ac2b9b18fccd4a91760a7",
    measurementId: "G-H7H4SHPKJK"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;