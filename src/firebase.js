// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useSelector, useDispatch } from "react-redux";
import { addUserInfo } from "./components/store/userInfo";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";
// import store from "./store";
// import { login as loginHandle, logoutt as logoutHandle } from "./store/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const LoginUser = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);

    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

// export const login = (email, password) => {
//   // const dispatch = useDispatch();

//   return (dispatch) => {
//     try {
//       const { user } = signInWithEmailAndPassword(auth, email, password);
//       console.log(user);
//       dispatch(addUserInfo(user));
//       return user;
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
// };

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const addProfiles = async (data) => {
  const result = await addDoc(collection(db, "profiles"), data);
  console.log(result);
};
