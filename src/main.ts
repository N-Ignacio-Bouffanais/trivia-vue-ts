import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret, faUserAstronaut, faUserNinja, faRobot, faHatWizard } from "@fortawesome/free-solid-svg-icons";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvEfN04VwLdEDX7IZVRuJ6M0e-6AzDIIo",
  authDomain: "vue-trivia-5f8d6.firebaseapp.com",
  projectId: "vue-trivia-5f8d6",
  storageBucket: "vue-trivia-5f8d6.appspot.com",
  messagingSenderId: "839249239562",
  appId: "1:839249239562:web:abf87953bcd7ef70f409f3",
  measurementId: "G-1QZJDBQY4M"
};

initializeApp(firebaseConfig);

library.add(faUserSecret, faUserAstronaut, faUserNinja, faRobot, faHatWizard);

createApp(App)
  .use(createPinia())
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
