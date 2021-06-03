import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCwZeKljw0cwsXfD2R77HJX6CGZJGFMk8w",
  authDomain: "clone-8b387.firebaseapp.com",
  projectId: "clone-8b387",
  storageBucket: "clone-8b387.appspot.com",
  messagingSenderId: "1021335127016",
  appId: "1:1021335127016:web:6ab245c7b187115fe1da5d",
  measurementId: "G-8614ZHK1YQ"

})


const auth = firebase.auth();

export { auth };