import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJDuNeefn0nBAT8JFZaFsqHsBRQgdi1Zc",
    authDomain: "proyecto-ecommerce-vedana.firebaseapp.com",
    projectId: "proyecto-ecommerce-vedana",
    storageBucket: "proyecto-ecommerce-vedana.appspot.com",
    messagingSenderId: "576682698989",
    appId: "1:576682698989:web:8b2620400bd93a1ea0c4e4"
}
const app= firebase.initializeApp(firebaseConfig)

// export function getFirebase(){
//     return app
// }

export function getFirestore(){
    return firebase.firestore(app)
};