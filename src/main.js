import { createApp } from "vue";
import { createPinia } from "pinia";
import directives from "./directives/index";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.mount("#app");
