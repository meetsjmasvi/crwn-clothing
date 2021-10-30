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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    let { displayName, email } = userAuth;
    let createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error('error creating user : ', error.message)
    }
  }

  return userRef;
}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then((res) => {
      console.info('logged in successfully....', res);
    })
    .catch((err) => {
      console.error('logged in failed', err);
    });
}

export default firebase;