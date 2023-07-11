<template>
<!-- É necessário criar uma div, pois o vue não aceita mais de um elemento solto na página. -->
<div class="corpo">
    <!-- Para adicionar um texto também pode ser feito como: <h1 v-text="titulo"></h1> -->
    <h1 class="centralizado">{{ titulo }}</h1> 
    <!-- Utilizando diretiva v-for para percorrer um array de fotos. -->
    <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto in fotos">
            <meu-painel :titulo="foto.titulo">
                <img class="imagem-responsiva" :src="foto.url" alt="foto.titulo">
            </meu-painel>
        </li>
    </ul>
</div>
</template>

<script>
import Painel from './components/shared/painel/Painel'

export default {
    components: {
        'meu-painel': Painel
    },

    data() { 
        return {
            titulo: "Alurapic",
            fotos: [],
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
    .corpo {
        font-family: Helvetica, sans-serif;
        width: 96%;
        margin: 0 auto;
    }

    .centralizado {
        text-align: center;
    }

    .lista-fotos {
        list-style: none;
    }

    .lista-fotos .lista-fotos-item {
        display: inline-block;
    }

    .imagem-responsiva {
        width: 100%;
    }
</style>
