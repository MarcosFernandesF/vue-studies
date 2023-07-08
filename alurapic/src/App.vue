<template>
<!-- É necessário criar uma div, pois o vue não aceita mais de um elemento solto na página. -->
<div>
    <!-- Para adicionar um texto também pode ser feito como: <h1 v-text="titulo"></h1> -->
    <h1>{{ titulo }}</h1> 
    <!-- Utilizando diretiva v-for para percorrer um array de fotos. -->
    <ul>
        <li v-for="foto in fotos">
            <!-- Não é possível fazer interpolação em atributos html. É necessário utilizar diretivas: v-bind: ou apenas : -->
            <img :src="foto.url" :alt="foto.descricao">
        </li>
    </ul>
</div>
</template>

<script>
export default {
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
</style>
