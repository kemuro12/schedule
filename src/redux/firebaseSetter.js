import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA-CJ2zuxDNU58wA5DNaqwxyZ9m59F8fkw",
    authDomain: "schedule-e6ac1.firebaseapp.com",
    databaseURL: "https://schedule-e6ac1.firebaseio.com",
    projectId: "schedule-e6ac1",
    storageBucket: "schedule-e6ac1.appspot.com",
    messagingSenderId: "919979591120",
    appId: "1:919979591120:web:f8a6e1a6dba978753625d5"
};
  
export default firebase.initializeApp(firebaseConfig);