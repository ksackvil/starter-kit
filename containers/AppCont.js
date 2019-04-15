/*
 * AppCont.js
 * 
 * This class acts as the global container for the entire app. It is set up as a 
 * global variable at App.js and should be accessible by any screen, called the same way
 * as any other container.
 * 
 */ 

import { Container } from "unstated";

// EXAMPLE...
// IF you want to use firebase, call the functions here
// import { getDocument } from '../firebase/Firestore';

class AppCont extends Container {
    state = {
        user: "Kai"
    };

    // EXAMPLE...
    // put a wrapper here to call the firebase "firestore" functions
    // getDoc = (doc) => {
    //     getDocument("Places", doc)
    //         .then(obj => {
    //             if (obj.exists) {
    //                 /* do some calculation here */
    //                    this.setState(updatedState);
    //             } else {
    //                 console.log("No such document!");
    //             }
    //         })
    //         .catch(function(error) {
    //             console.log("Error getting document:", error);
    //         });
    // };
}

export default AppCont;
