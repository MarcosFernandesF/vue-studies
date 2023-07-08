// Importando Global View Object do módulo vue.
import Vue from 'vue'
import App from './App.vue'

// Importando e utilizando VueResource.
import VueResource from 'vue-resource';
Vue.use(VueResource);

// View Instance.
// el: Elemento em que será renderizado um template.
// render: Qual template será renderizado.
new Vue({
  el: '#app',
  render: h => h(App)
})
