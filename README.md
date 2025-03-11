# Firebase Authentication App

This project is a simple web application that allows users to sign up and log in using Firebase Authentication. It consists of a login page, a signup page, and the necessary backend configuration to handle user authentication.

## Project Structure

```
firebase-auth-app
├── public
│   ├── index.html        # Main entry point of the application
│   ├── login.html        # Login page for existing users
│   └── signup.html       # Signup page for new users
├── src
│   ├── app.js            # Initializes the application and manages routing
│   ├── firebase-config.js # Firebase configuration settings
│   └── auth
│       ├── login.js      # Handles user login functionality
│       └── signup.js     # Handles user signup functionality
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd firebase-auth-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure Firebase:**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase configuration object and update `src/firebase-config.js` with your credentials.

4. **Run the application:**
   - You can use a local server to serve the `public` directory. For example, you can use `live-server` or any other static server.
   - Open your browser and navigate to `http://localhost:PORT/index.html` to access the application.

## Usage

- Navigate to the signup page to create a new account.
- After signing up, you can log in using the credentials you created.
- The application uses Firebase Authentication to manage user sessions and authentication states.

## License

This project is licensed under the MIT License.