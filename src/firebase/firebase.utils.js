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

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData)=>{
   if(!userAuth) return;
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();
   if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        const setUser =  await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         })

         console.log('setUSer',setUser);
      } catch(error){
         console.log('error creating user', error.message);
         console.log('create uuser got caught');
      }
   }
   return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async() => {
   const loginInfo = await auth.signInWithPopup(provider);
   if(loginInfo && loginInfo.user){
      console.log('user inside', loginInfo.user.displayName)
      localStorage.setItem('displayName', loginInfo.user.displayName)
   }
}

export default firebase;