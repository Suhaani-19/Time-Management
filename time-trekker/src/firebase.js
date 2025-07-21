// src/firebase.js
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  linkWithCredential,
  reauthenticateWithCredential,
  EmailAuthProvider
} from "firebase/auth";

// --- YOUR ACTUAL FIREBASE CONFIG ---
const firebaseConfig = {
  apiKey: "AIzaSyBwPw1EizbMcbq7k213Fw9EspY_ivMYEQA",
  authDomain: "time-tracker-a0b2c.firebaseapp.com",
  projectId: "time-tracker-a0b2c",
  // Optional but recommended: appId, storageBucket, messagingSenderId if you have them
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// You may use this for Email Link sign-in, but for basic login/signup it's not needed:
export const actionCodeSettings = {
  url: "https://time-tracker-a0b2c.firebaseapp.com/finishSignUp", // or your deployed site
  handleCodeInApp: true,
};

// Helpers for email-link sign-in (optional advanced)
export function sendEmailLink(email) {
  return sendSignInLinkToEmail(auth, email, actionCodeSettings);
}
export function isEmailLink(link) {
  return isSignInWithEmailLink(auth, link);
}
export function signInWithEmail(email, link) {
  return signInWithEmailLink(auth, email, link);
}
export function emailLinkCredential(email, link) {
  return EmailAuthProvider.credentialWithLink(email, link);
}
export function linkEmailCredential(credential) {
  return linkWithCredential(auth.currentUser, credential);
}
export function reauthWithEmailCredential(credential) {
  return reauthenticateWithCredential(auth.currentUser, credential);
}
