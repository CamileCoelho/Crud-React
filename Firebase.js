import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from 'react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyB-YiqLdK2FLPLxW_fwxmzpSvMzdBjZkWg",
  authDomain: "topicosespeciaisemprogramacao.firebaseapp.com",
  projectId: "topicosespeciaisemprogramacao",
  storageBucket: "topicosespeciaisemprogramacao.appspot.com",
  messagingSenderId: "458258591396",
  appId: "1:458258591396:web:dad6c20a310eb3ac324031"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export{ auth };