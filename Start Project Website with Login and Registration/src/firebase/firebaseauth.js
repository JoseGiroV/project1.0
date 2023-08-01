import app from "./firebase.config.js";
import{ getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const  auth = getAuth (app)

const emailL = document.getElementById('emailL');
const passwordL = document.getElementById('passwordL');
const btnLogin = document.getElementById('btnLogin');
const labelError =document.getElementById('labelError');

btnLogin.addEventListener('click', (event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, emailL.value, passwordL.value )
     .then(userCredential =>{   
        const userFull= userCredential;
        const user= userCredential.user;

        console.log('signed in');
        console.log(userFull);
        console.log(user);

     })
     .catch(error => {
        if(error.code === 'auth/wrong-password'){
        labelError.innerText = error.code;
        }
        console.log(error.code);
        console.log(error.message);
        console.log('error with our credentials');
     })
})

