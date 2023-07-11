<template>
<!-- Como o painel será reutilizado é importante criar um componente compartilhado. -->
    <div class="painel">
        <h2 class="painel-titulo">{{ titulo }}</h2>
        <!-- Para aplicar conteudo a mais de um slot pesquisar por named slots -->
        <slot class="painel-conteudo">
        </slot>
    </div>
</template>

<script>
export default {
    props: ['titulo']
}
</script>

<!-- Scoped garante que os estilos vão ser aplicados somente à este componente. -->
<style scoped>
    /* estilo do painel */ 
    .painel {
        padding: 0 auto;
        border: solid 2px grey;
        display: inline-block;
        margin: 5px;
        box-shadow: 5px 5px 10px grey;
        width: 200px;
        height: 100%;
        vertical-align: top;
        text-align: center;
    }

    .painel .painel-titulo {
        text-align: center;
        border: solid 2px;
        background: lightblue;
        margin: 0 0 15px 0;
        padding: 10px;
        text-transform: uppercase;
    }

    * {
        box-shadow: 5px 5px 5px;
    }

</style>
