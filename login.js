import { auth } from '../firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
            SVGComponentTransferFunctionElement('Game.html');
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
});