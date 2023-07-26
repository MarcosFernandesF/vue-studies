<template>
    <!-- É necessário criar uma div, pois o vue não aceita mais de um elemento solto na página. -->
    <div>
        <!-- Para adicionar um texto também pode ser feito como: <h1 v-text="titulo"></h1> -->
        <h1 class="centralizado">{{ titulo }}</h1> 
        <!-- Com v-on o vue consegue escutar o evento de javascript -->
        <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtre por parte do titulo">
        <!-- Utilizando diretiva v-for para percorrer um array de fotos. -->
        <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto in fotosComFiltro">
                <meu-painel :titulo="foto.titulo">
                    <imagem-responsiva v-meu-transform:scale.animate.reverse="1.1" :url="foto.url" :titulo="foto.titulo"/>
                    <meu-botao 
                        tipo="button"
                        rotulo="REMOVER"
                        :confirmacao="true"
                        @botaoAtivado="remove(foto)"
                        estilo="padrao"/>
                </meu-painel>
            </li>
        </ul>
    </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue'
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue'

export default {
    components: {
        'meu-painel': Painel,
        'imagem-responsiva': ImagemResponsiva,
        'meu-botao': Botao,
    },

    data() { 
        return {
            titulo: "Alurapic",
            fotos: [],
            filtro: "",
        }
    },

    computed: {
        fotosComFiltro() {
            if (this.filtro) {
                let exp = new RegExp(this.filtro, 'i');
                return this.fotos.filter(foto => exp.test(foto.titulo));
            }
            else {
                return this.fotos;
            }
        }
    },

    methods: {
        remove (foto) {
            alert('Removendo a foto ' + foto.titulo);
        }
    },

    // LifeCycle Hooks: Funções que são chamadas em determinados ciclos de vida de um componente.
    created() {
        this.$http.get('http://localhost:3000/v1/fotos')
            .then(res => res.json())
            .then(fotos => this.fotos = fotos, err => console.log(err));
    }
}
</script>

<style>
    .centralizado {
        text-align: center;
    }

    .lista-fotos {
        list-style: none;
    }

    .lista-fotos .lista-fotos-item {
        display: inline-block;
    }

    .filtro {
        display: block;
        width: 100%;
    }
</style>
