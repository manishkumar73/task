import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBhKt416wqDBG89O4NcrsoE3dyfKFKzgIU",
  authDomain: "task-ede76.firebaseapp.com",
  projectId: "task-ede76",
  storageBucket: "task-ede76.appspot.com",
  messagingSenderId: "476837695403",
  appId: "1:476837695403:web:5b050f68775b86a214ccee",
  measurementId: "G-NLYF28F67H",
})

export const auth = app.auth()
export default app
