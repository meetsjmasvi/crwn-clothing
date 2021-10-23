import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyC_XkDs9Cy2kd745qWopCIqpsbnxsGmOIk",
  authDomain: "crwn-db-b1156.firebaseapp.com",
  projectId: "crwn-db-b1156",
  storageBucket: "crwn-db-b1156.appspot.com",
  messagingSenderId: "161909149025",
  appId: "1:161909149025:web:a983e528469ba0e2bb8920",
  measurementId: "G-0XREW0N8QW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then((res) => {
      console.log('logged in successfully....', res);
    })
    .catch((err) => {
      console.log('logged in failed', err);
    });
}

export default firebase;