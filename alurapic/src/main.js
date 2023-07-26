// Importando Global View Object do módulo vue.
import Vue from 'vue'
import App from './App.vue'

// Importando e utilizando VueResource.
import VueResource from 'vue-resource';
Vue.use(VueResource);

// Importando e utilizando VueRouter.
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Importando as rotas.
import { routes }  from './routes';
const router = new VueRouter({ routes });

// Importando diretiva.
import './directives/Transform.js'

// View Instance.
// el: Elemento em que será renderizado um template.
// render: Qual template será renderizado.
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
