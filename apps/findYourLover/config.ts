/// <reference types="vite/client" />

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_Firebase_API_KEY,
  authDomain: import.meta.env.VITE_Firebase_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_Firebase_DATABASE_URL,
  projectId: import.meta.env.VITE_Firebase_PROJECT_ID,
  storageBucket: import.meta.env.VITE_Firebase_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_Firebase_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_Firebase_ID,
  measurementId: import.meta.env.VITE_Firebase_MEASUREMENT_ID,
};
