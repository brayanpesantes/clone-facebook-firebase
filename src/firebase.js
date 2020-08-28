import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCF1AB_1ZFWeRaF87C2r32hRyYQGDJkTh8",
	authDomain: "facebook-clone-563fe.firebaseapp.com",
	databaseURL: "https://facebook-clone-563fe.firebaseio.com",
	projectId: "facebook-clone-563fe",
	storageBucket: "facebook-clone-563fe.appspot.com",
	messagingSenderId: "721944228322",
	appId: "1:721944228322:web:2df58e4d1042958c1689bb",
	measurementId: "G-H406291JK1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
