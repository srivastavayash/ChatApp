# Chat App

This is a simple chat application built using React.js and Firebase. It allows users to chat in real-time using both Firestore and Realtime Database.

![alt text](image.png)
![alt text](image-1.png)
## Features

- Real-time messaging
- User authentication
- Firestore database integration
- Realtime Database integration
- Image uploading
- User presence status

## Technologies Used

- React.js
- Firebase Authentication
- Firebase Firestore
- Firebase Realtime Database
- Firebase Storage

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd chat-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up Firebase:

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication, Firestore, Realtime Database, and Storage services
   - Add a web app to your Firebase project and copy the Firebase configuration details
   - Create `.env` file in the project root and add your Firebase configuration details:

     ```plaintext
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Folder Structure

```
chat-app/
│
├── public/              # Public assets and HTML template
│   └── index.html
│
├── src/                 # Source files
│   ├── assets/          # Images and other assets
│   ├── components/      # React components
│   ├── context/         # React context providers
│   ├── firebase/        # Firebase configuration and initialization
│   ├── pages/           # Application pages
│   ├── services/        # Firebase services (e.g., authentication, database)
│   ├── App.css
│   ├── App.js
│   └── index.js
│
├── .env                 # Environment variables (ignored by Git)
├── .gitignore
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please create an issue or submit a pull request if you find any bugs or want to improve the application.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to customize this README file according to your project's specific details and requirements.
