import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
let app = createApp(App);

app.use(router);
app.config.globalProperties.$state = store.state;
app.mount("#app");
