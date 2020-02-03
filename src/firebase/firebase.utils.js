import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC6u7Rjuqix_g6Zh8Jyfw7uLUM2MafQ58M',
  authDomain: 'ztm-react-e-commerce.firebaseapp.com',
  databaseURL: 'https://ztm-react-e-commerce.firebaseio.com',
  projectId: 'ztm-react-e-commerce',
  storageBucket: 'ztm-react-e-commerce.appspot.com',
  messagingSenderId: '844662175969',
  appId: '1:844662175969:web:aed0ecc0f4bfc669a75fa0',
  measurementId: 'G-49VMT4J0ZF'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
