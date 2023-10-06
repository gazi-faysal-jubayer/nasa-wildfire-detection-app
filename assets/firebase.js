import { initializeApp } from "@react-native-firebase/app";
import { getAuth } from "@react-native-firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBAdkSoKPIfs3JWwhMhyKsozaCh3MEEut8",
  authDomain: "nasa-wildfire-web.firebaseapp.com",
  projectId: "nasa-wildfire-web",
  storageBucket: "nasa-wildfire-web.appspot.com",
  messagingSenderId: "378270433165",
  appId: "1:378270433165:web:c4f604eade99093bfc87c4",
  measurementId: "G-3157LKV79R"
};

initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
