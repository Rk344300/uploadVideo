import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA29-angX4Y_r0J6F7JFsVQNQ_JmWiGbPU",
  authDomain: "uploadvideos-96320.firebaseapp.com",
  projectId: "uploadvideos-96320",
  storageBucket: "uploadvideos-96320.appspot.com",
  messagingSenderId: "1060549681700",
  appId: "1:1060549681700:web:f924c26a8a7495d525aeb1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
