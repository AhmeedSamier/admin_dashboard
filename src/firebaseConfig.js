// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA5pkFfnkOxys_aWUXxSuK3eXFQwRNxfdc",
//   authDomain: "dashboard-5ea84.firebaseapp.com",
//   projectId: "dashboard-5ea84",
//   storageBucket: "dashboard-5ea84.firebasestorage.app",
//   messagingSenderId: "8989069361",
//   appId: "1:8989069361:web:a3b76f7b1591413f65c510",
//   measurementId: "G-X30EXE2NFG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// src/firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA5pkFfnkOxys_aWUXxSuK3eXFQwRNxfdc",
//   authDomain: "dashboard-5ea84.firebaseapp.com",
//   projectId: "dashboard-5ea84",
//   storageBucket: "dashboard-5ea84.appspot.com",
//   messagingSenderId: "8989069361",
//   appId: "1:8989069361:web:a3b76f7b1591413f65c510",
//   measurementId: "G-X30EXE2NFG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Firebase services
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// export default app;




import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5pkFfnkOxys_aWUXxSuK3eXFQwRNxfdc",
  authDomain: "dashboard-5ea84.firebaseapp.com",
  projectId: "dashboard-5ea84",
  storageBucket: "dashboard-5ea84.appspot.com",
  messagingSenderId: "8989069361",
  appId: "1:8989069361:web:a3b76f7b1591413f65c510",
  measurementId: "G-X30EXE2NFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;