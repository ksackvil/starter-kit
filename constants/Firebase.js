/*
 * Firebase.js
 * 
 * This file connects this react app to Firebase, using authentication keys, since we want 
 * our database to be private we cannot simply put the api keys as a string in the config 
 * object below, doing so would make it possible for anyone to mess with our database since
 * the keys would be available on github. You need to create a file called "env.js" in the "src"
 * folder. This file will export each key needed to connect to firebase.
 * 
 * Invariant:
 *      The file "{projectRoot}/src/env.js" exists and exports each of the keys used below
 * 
 */ 

import * as firebase from 'firebase';
import 'firebase/firestore';
import { FB_API_KEY, FB_AUTH_DOMAIN, FB_DB_URL, FB_PRO_ID, FB_STORAGE_BUCKET, FB_SENDER_ID } from '../env';

// Initialize Firebase below
var config = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  databaseURL: FB_DB_URL,
  projectId: FB_PRO_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_SENDER_ID
};
// var config = process.env.FIREBASE_AUTH_OBJECT
firebase.initializeApp(config)

export default firebase;
