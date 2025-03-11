import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAZ90XDZ3eYYdvFKxAh6ewxbnyeK2O5xUM",
    authDomain: "slcfblaproject.firebaseapp.com",
    databaseURL: "https://slcfblaproject-default-rtdb.firebaseio.com",
    projectId: "slcfblaproject",
    storageBucket: "slcfblaproject.firebasestorage.app",
    messagingSenderId: "219729653961",
    appId: "1:219729653961:web:c4b83bb227d36ff0765d18"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };