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

// Adotando como convenção para o http uma rota.
Vue.http.options.root = "http://localhost:3000";

// Importando VeeValidate e a lingua portuguesa para as mensagens.
import msg from './pt_BR';
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate, {
	locale: 'pt_BR',
	dictionary: {
		pt_BR: {
			messages: msg
		}
	}
});

// View Instance.
// el: Elemento em que será renderizado um template.
// render: Qual template será renderizado.
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
