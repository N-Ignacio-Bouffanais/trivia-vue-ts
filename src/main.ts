import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvEfN04VwLdEDX7IZVRuJ6M0e-6AzDIIo",
  authDomain: "vue-trivia-5f8d6.firebaseapp.com",
  projectId: "vue-trivia-5f8d6",
  storageBucket: "vue-trivia-5f8d6.appspot.com",
  messagingSenderId: "839249239562",
  appId: "1:839249239562:web:abf87953bcd7ef70f409f3",
  measurementId: "G-1QZJDBQY4M"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createApp(App)
  .use(createPinia())
  .use(router)
  .mount("#app");


