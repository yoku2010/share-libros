// https://firebase.google.com/docs/firestore/quickstart
var admin = require("firebase-admin");
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