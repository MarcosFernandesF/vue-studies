<template>
    <div>
        <button :class="estiloDoBotao" :type="tipo" @click="disparaAcao()">{{ rotulo }}</button>
    </div>
</template>

<script>
export default {
    props: {
        tipo: {
            required: true,
            type: String,
        },
        rotulo: {
            required: true,
            type: String,
        },
        confirmacao: {
            required: false,
            default: false,
            type: Boolean,
        },
        estilo: {
            required: false,
            default: 'padrao',
            type: String,
        }
    },

    methods: {
        disparaAcao() {
            if (this.confirmacao) {
                if (confirm('Deseja confirmar a ação?')) {
                    this.$emit('botaoAtivado');
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
    },

    computed: {
        estiloDoBotao() {
            if (this.estilo == 'padrao') return 'botao botao-padrao';
            if (this.estilo == 'perigo') return 'botao botao-perigo';
        }
    }
}
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>