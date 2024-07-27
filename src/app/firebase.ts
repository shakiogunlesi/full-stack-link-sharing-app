// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6MEVrlbSlndMDY6-6Ftop0iRr7_yEFlQ",
  authDomain: "fulll-stack-link-sharing-app.firebaseapp.com",
  projectId: "fulll-stack-link-sharing-app",
  storageBucket: "fulll-stack-link-sharing-app.appspot.com",
  messagingSenderId: "105792262199",
  appId: "1:105792262199:web:8b4d1c8dd79e4d46e82fb2",
  measurementId: "G-552HTGMVV6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth };
export default db;