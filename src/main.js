import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import VueGtag from "vue-gtag";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far);

// Google Analytics

createApp(App)
    .use(router)
    .use(VueGtag, { config: { id: "G-5RR4CY9KB3" } })
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
