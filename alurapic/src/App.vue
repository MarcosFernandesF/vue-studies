<template>
<!-- É necessário criar uma div, pois o vue não aceita mais de um elemento solto na página. -->
<div>
    <!-- Para adicionar um texto também pode ser feito como: <h1 v-text="titulo"></h1> -->
    <h1>{{ titulo }}</h1> 
    <!-- Não é possível fazer interpolação em atributos html. É necessário utilizar diretivas: v-bind: ou apenas : -->
    <!-- Utilizando diretiva v-for para percorrer um array de fotos. -->
    <ul>
        <li v-for="foto in fotos">
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
            fotos: [
                {
                    url: "https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro.jpg",
                    descricao: "cachorro"
                },
                {
                    url: "https://fisioanimal.com/blog/wp-content/uploads/2019/06/Cute-puppy-sleep-on-shoes_2560x1600-752x470.jpg",
                    descricao: "cachorro-pequeno"
                }
            ],
        }
    }
}
</script>

<style>
</style>
