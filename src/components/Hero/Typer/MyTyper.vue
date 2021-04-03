<template>
    <span class="border-r-2 border-red-900"> {{ curTyperWord }}</span>
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
                j = 0
                if (k < props.keywords.length - 1) {
                    k++
                } else {
                    k = 0
                }
            } 
        }, 300)

        return { curTyperWord }
    },
})
</script>
