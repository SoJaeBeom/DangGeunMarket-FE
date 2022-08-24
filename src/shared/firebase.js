// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyAwcN1rlaBYIw3s8dr1Nm-pTRsfCZyOpqM',
  authDomain: 'imageupload-659b7.firebaseapp.com',
  projectId: 'imageupload-659b7',
  storageBucket: 'imageupload-659b7.appspot.com',
  messagingSenderId: '672304536399',
  appId: '1:672304536399:web:8808e6364cf294ea9dc33a',
  measurementId: 'G-3KJLLRFWD4',
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

// const analytics = getAnalytics(app);
