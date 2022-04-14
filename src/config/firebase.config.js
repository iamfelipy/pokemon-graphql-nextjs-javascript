// Import the functions you need from the SDKs you need
import Firebase from 'Firebase/app';
import 'Firebase/auth';

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

Firebase.initializeApp(FirebaseCredentials)

export default Firebase;
