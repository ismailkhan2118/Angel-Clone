// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJNzXcbe3WYF81w6-mpZn2qlxqJYd2njM",
  authDomain: "angelclone2022.firebaseapp.com",
  projectId: "angelclone2022",
  storageBucket: "angelclone2022.appspot.com",
  messagingSenderId: "629319639177",
  appId: "1:629319639177:web:3c7316afd4704040aea658",
  measurementId: "G-59VGJ3DLYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);