<template>
    <span class="py-2"> {{ curTyperWord }} <span class="text-red-300 text-3xl animate-ping-fast">✍️</span></span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

let i = 0
let j = 1
let k = 0

export default defineComponent({
    props: ['keywords'],
    setup(props) {
        const curTyperWord = ref('')

        setInterval(() => {
            curTyperWord.value = props.keywords[k].slice(i, j++)
            if (props.keywords[k].length + 1 == j) {
                setTimeout(() => {
                    j = 0
                    if (k < props.keywords.length - 1) {
                        k++
                    } else {
                        k = 0
                    }
                }, 1500)
            } 
        }, 200)

        return { curTyperWord }
    },
})
</script>
