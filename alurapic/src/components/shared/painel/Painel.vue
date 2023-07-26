<template>
<!-- Como o painel será reutilizado é importante criar um componente compartilhado. -->
    <div class="painel">
        <!-- O v-on também pode ser interpretado por um @ -->
        <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
        <transition name="painel-fade">
            <!-- A diretiva v-show manipula o display para none ou não do elemento. -->
            <div class="painel-conteudo" v-show="visivel">
                <!-- Para aplicar conteudo a mais de um slot pesquisar por named slots. -->
                <slot></slot>
            </div>
        </transition>
    </div> 
</template>

<script>
export default {
    props: ['titulo'],

    data () {
        return {
            visivel: true,
        }
    },
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

    .painel-fade-enter, .painel-fade-leave-active {
        opacity: 0;
    }

    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity .4s;
    }

    .painel-conteudo {
        overflow: hidden;
    }
</style>
