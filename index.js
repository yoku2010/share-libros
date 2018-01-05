// https://firebase.google.com/docs/firestore/quickstart
var admin = require("firebase-admin");
var FieldValue = require("firebase-admin").firestore.FieldValue;
var serviceAccount = require("./key/share-libros-firebase-adminsdk-fye8u-a62623af6a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://share-libros.firebaseio.com"
});

var db = admin.firestore();

var userRef = db.collection('users').doc('user2');

// set data
userRef.set({
    first: "Yogesh",
    last: "Kumar",
    city: "Ajmer"
});

// To update and merged into the existing document
var userRef = db.collection('users').doc('user');
userRef.set({
    first: "Yogesh Kumar",
    last: "Kasodiya",
    age: 28
}, { merge: true });

// get data
db.collection('users').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });

// variety of data types inside a document,
// var data = {
//     stringExample: 'Hello, World!',
//     booleanExample: true,
//     numberExample: 3.14159265,
//     dateExample: new Date('January 10, 2018'),
//     arrayExample: [5, true, 'hello'],
//     nullExample: null,
//     objectExample: {
//         a: 5,
//         b: true
//     }
// };

// var setDoc = db.collection('data').doc('dataTypes').set(data);

// Add a new document with a generated id.
var addDoc = db.collection('cities').add({
    name: 'Tokyo',
    country: 'Japan'
}).then(ref => {
    console.log('Added document with ID: ', ref.id);
});

// update some field without overwriting the entire document.
var dtRef = db.collection('data').doc('dataTypes');

// Set the 'booleanExample' field of the dataTypes
var updateSingle = dtRef.update({
    booleanExample: false,
    // Update the timestamp field with the value from the server
    timestamp: FieldValue.serverTimestamp()
});