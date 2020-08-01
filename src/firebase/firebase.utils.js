import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyAeCfS0D7Yn4QimKmoIVU7YkByHhqyPcXg",
   authDomain: "shopping-cart-2479c.firebaseapp.com",
   databaseURL: "https://shopping-cart-2479c.firebaseio.com",
   projectId: "shopping-cart-2479c",
   storageBucket: "shopping-cart-2479c.appspot.com",
   messagingSenderId: "630143016029",
   appId: "1:630143016029:web:16d38f1604356f807ac1b4",
   measurementId: "G-9S5S9ZKGVG"
}
console.log('firebase', firebase)
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData)=>{
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();
   if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         })
      } catch(error){
         console.log('error creating user', error.message);
      }
   }
   return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;