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

export const createUserProfileDocument= async(userAuth, additionalData)=>{
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        
        if  (!snapShot.exists){
           const {displayName, email} = userAuth;
           const createdAt =  new Date();
           try {
                await userRef.set({
                   displayName,
                   email,
                   createdAt,
                   ...additionalData     
                })
                }catch(err){
                        console.log('error', err.message);
                }
        }

        return userRef;
} 


firebase.initializeApp(config);

export const addCollectionAndDocuments= async (collectionKey, objectsToAdd) =>{
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj=>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
  });

  return await batch.commit()

}

export const convertCollectionsSnapshotToMap =(collections) =>{
  const transformedCollection = collections.docs.map(doc=>{
          const {title, items} =  doc.data();

          return {
                routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title,
                items
          }
  })
  
  return transformedCollection.reduce((acc, collection)=>{
        acc[collection.title.toLowerCase()] = collection;
        return acc
  },{});
}

export const getCurrentUser = ()=>{
   return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth =>{
          unsubscribe();
          resolve(userAuth);
        }, reject)
   })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider)

export default firebase;