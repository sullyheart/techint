import Vue from "vue";
import App from "./app.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

async function main() {
  let storeInstance = await store()

new Vue({
    router: router(storeInstance),
    store: storeInstance,
    render: h => h(App)
  }).$mount('#app')//instantiating the view instance and  mounting it on a dom element called app
}

main()
//entry point to vue.js application i.e the only place that imports view.