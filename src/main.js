import { createApp } from "vue";
import App from "./App.vue";
import quasarInit from "./quasar";

const app = createApp(App);
quasarInit({ app });

app.mount("#app");
