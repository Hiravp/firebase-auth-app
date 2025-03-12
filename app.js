// This file initializes the application, sets up Firebase authentication, and manages routing between the login and signup pages.

import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig, auth } from './firebase-config';
import login from './login';
import signup from './signup';

firebase.initializeApp(firebaseConfig);

console.log('Firebase initialized:', auth);

const app = document.getElementById('app');

function renderLogin() {
    app.innerHTML = `
        <h1>Login</h1>
        <form id="login-form">
            <input type="email" id="email" placeholder="Email" required />
            <input type="password" id="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="signup.html">Sign up</a></p>
    `;
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    });
}

function renderSignup() {
    app.innerHTML = `
        <h1>Sign Up</h1>
        <form id="signup-form">
            <input type="email" id="email" placeholder="Email" required />
            <input type="password" id="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="login.html">Login</a></p>
    `;
    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        signup(email, password);
    });
}

function init() {
    const path = window.location.pathname;
    if (path.endsWith('login.html')) {
     //   renderLogin();
    } else if (path.endsWith('signup.html')) {
       // renderSignup();
    } else {
        renderLogin(); // Default to login
    }
}

window.onload = init;