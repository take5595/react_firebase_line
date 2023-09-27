import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyAxCzu7oqT-1UQrFdnuwh5m1eRqYGPCkkM",
    authDomain: "line-clone-3ecca.firebaseapp.com",
    projectId: "line-clone-3ecca",
    storageBucket: "line-clone-3ecca.appspot.com",
    messagingSenderId: "22651051191",
    appId: "1:22651051191:web:98505dd2e2c1c8d88c4132"
  };

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
