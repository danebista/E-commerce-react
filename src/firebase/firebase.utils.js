import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
        apiKey: "AIzaSyDm7Qmv_YluLVLaszBPYShEK1UTuikccDY",
        authDomain: "crwn-db-10810.firebaseapp.com",
        projectId: "crwn-db-10810",
        storageBucket: "crwn-db-10810.appspot.com",
        messagingSenderId: "16984461269",
        appId: "1:16984461269:web:4d83b2c8df435eb7c9b75c",
        measurementId: "G-9C36G8J3H4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase;