import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDP4CjPTHR157phe3BUe7oSPo9UOqIYm9I',
  authDomain: 'react-auth-c81ed.firebaseapp.com',
  projectId: 'react-auth-c81ed',
  storageBucket: 'react-auth-c81ed.appspot.com',
  messagingSenderId: '277097174905',
  appId: '1:277097174905:web:711f501847d7a747b581a8',
  measurementId: 'G-1S1H8M1C1F',
};

const fire = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

export default fire;