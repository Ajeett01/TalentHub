// import "firebase/auth";
// import {getFirestore} from "firebase/firestore/lite";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/storage";
// import { getStorage } from "firebase/storage";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBFTXb_rWJcAd1WPLv4fqygq5arxfalJoI",
//   authDomain: "linkedin-clone-6935e.firebaseapp.com",
//   projectId: "linkedin-clone-6935e",
//   storageBucket: "linkedin-clone-6935e.appspot.com",
//   messagingSenderId: "41033332936",
//   appId: "1:41033332936:web:33c39b619a1fc5704a0dfd",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp)
// const auth = firebaseApp.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = getStorage(firebaseApp);

// export { auth, provider, storage };
// export default db;


import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFTXb_rWJcAd1WPLv4fqygq5arxfalJoI",
  authDomain: "linkedin-clone-6935e.firebaseapp.com",
  projectId: "linkedin-clone-6935e",
  storageBucket: "linkedin-clone-6935e.appspot.com",
  messagingSenderId: "41033332936",
  appId: "1:41033332936:web:33c39b619a1fc5704a0dfd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;