import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDibzEz4mvn2gQSvpVdwp-0C_8O8Roeno8",
  authDomain: "todo-conceptu-review-app.firebaseapp.com",
  projectId: "todo-conceptu-review-app",
  storageBucket: "todo-conceptu-review-app.appspot.com",
  messagingSenderId: "146825273704",
  appId: "1:146825273704:web:327efcca3451d815b2f6dd",
  measurementId: "G-6XYHZ9N7XZ",
};

// Initialize Firebase
const firApp = initializeApp(firebaseConfig);
const firAuth = initializeAuth(firApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const firFirestore = initializeFirestore(firApp, {});
export { firApp, firAuth, firFirestore };
