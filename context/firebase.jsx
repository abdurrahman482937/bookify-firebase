import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyCUmAx25NvUW9KMb6BJmrTT29WbDu6lQvU",
    authDomain: "bookify-firebase-1.firebaseapp.com",
    projectId: "bookify-firebase-1",
    storageBucket: "bookify-firebase-1.firebasestorage.app",
    messagingSenderId: "43902258863",
    appId: "1:43902258863:web:15edac94bec2098c60ce5a",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig)

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
