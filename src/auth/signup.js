import { auth } from '../firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User signed up:', userCredential.user);
            // Redirect to home page or dashboard
        })
        .catch((error) => {
            console.error('Error signing up:', error);
        });
});