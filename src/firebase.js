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
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import toast from "react-hot-toast";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

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
const storage = getStorage(app);

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
};

export const uploadFile = async (file, metadata) => {
  const storageRef = ref(storage, file.name);
  await uploadBytes(storageRef, file, metadata);
};

export const getInfo = async () => {
  const querySnapshot = await getDocs(collection(db, "profiles"));
  const data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data());
  });
  return data;
};

export const updateProfile = async (data) => {
  const q = query(
    collection(db, "profiles"),
    where("uid", "==", auth.currentUser.uid)
  );

  const x = await getDocs(q);
  x.forEach((docc) => {
    const docRef = doc(db, "profiles", docc.id);
    updateDoc(docRef, {
      addProfile: data.addProfile,
      imgUrl: data.imgUrl,
      uid: data.uid,
    });
  });

  const docRef = doc(db, "profiles", doc.id);
};

export const dowlandCv = async (CvName) => {
  const storage = getStorage();
  console.log(CvName);
  const urlx = await getDownloadURL(ref(storage, CvName));
  return urlx;
  // .then((url) => {
  // console.log(url);
  // `url` is the download URL for 'images/stars.jpg'

  /*  // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Or inserted into an <img> element
      const img = document.getElementById("myimg");
      img.setAttribute("src", url); */
  // return url;
  // })
  // .catch((error) => {
  //   // Handle any errors
  // });
};
