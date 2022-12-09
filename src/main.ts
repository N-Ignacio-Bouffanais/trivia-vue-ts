import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret, faUserAstronaut, faUserNinja, faRobot, faHatWizard } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faUserAstronaut, faUserNinja, faRobot, faHatWizard);

createApp(App)
  .use(createPinia())
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
