/*
 * Firestore.js
 * 
 * This class handles the firebase api calls, there are some common functions already 
 * implemented below, feel free to add your own. 
 * 
 * Invariant:
 *      The file "{projectRoot}/src/Firebase.js" must already have been set up correctly,
 *      see file for more details.
 * 
 */ 

import firebase from '../constants/Firebase'

// Initialize Cloud Firestore through Firebase
const fs = firebase.firestore();

console.log("init firestore");

// Some nonsense...
fs.settings({ timestampsInSnapshots: true });

import firebase from '../constants/Firebase'
import {GeoFirestore} from 'geofirestore'

// Initialize Cloud Firestore through Firebase
const fs = firebase.firestore();

console.log("init firestore");
// Some nonsense...
fs.settings({ timestampsInSnapshots: true });
 
// @Def: sets document with body, if doc dne then it will create it
// @Param: (string) col = target collection
//         (string) doc = target document
//         (Object) body = json object to write
//       edit the existing object, else it will make a new obj.
// @Post: returns promise
export function setDocument(col, doc, body) {    
    return(
        fs.collection(col).doc(doc).set(body)
    )
}

// @Def: gets a document 
// @Param: (string) col = target collection
//         (string) doc = target document
// @Post: returns promise
export function getDocument(col, doc) {
    return(
        fs.collection(col).doc(doc).get()
    )
}

// @Def: gets documents
// @Param: (string) col = target collection
//         (string) query = query expression
//         (string) queryKey = key in expression
//         (any) queryValue = value in expression
//         (number) limit = max number of returned obj 
// @Post: returns promise
export function findDocuments(col, queryKey, query, queryValue, limit) {
    return(
        fs.collection(col).where(queryKey, query, queryValue).limit(limit).get()
    )
}

// @Def: Appends to Document Array, note that document must exist
// @Param: (string) col = target collection
//         (string) doc = target document
//         (string) updateKey = key to change
//         (any) updateBody = value to change
// @Post: returns promise
export function appendToArray(col, doc, updateKey, updateBody ) {
    var tempObj = {};
    tempObj[updateKey] = firebase.firestore.FieldValue.arrayUnion(updateBody);

    console.log(tempObj);
    return(
        fs.collection(col).doc(doc).update(tempObj)
    )
}
