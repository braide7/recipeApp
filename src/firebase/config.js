import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDXvDk1MZEu7eiebSNcnTJjiaa8NUY02zw",
    authDomain: "cooking-site-c725d.firebaseapp.com",
    projectId: "cooking-site-c725d",
    storageBucket: "cooking-site-c725d.appspot.com",
    messagingSenderId: "176991352794",
    appId: "1:176991352794:web:952c1e7e86b9f41418f2e3"
  }

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }