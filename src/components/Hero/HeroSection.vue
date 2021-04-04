<template>
    <section class="text-gray-600 w-11/12 md:w-6/7 lg:w-4/5 xl:w-2/3 xxl:w-1/2 mx-auto">
        <div class="container pt-8 pb-3 mx-auto px-2">
            <div class="flex flex-col justify-center text-center w-1/2 py-2 mx-auto">
                <h1 class="sm:text-xl text-lg font-extrabold title-font text-primary">
                    <span class="lowercase font-mono">
                        <my-typer :keywords="phrases" />
                    </span>
                </h1>
            </div>
            <div>
                <hero-image />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MyTyper from './Typer/MyTyper.vue'
import HeroImage from './HeroImage/HeroImage.vue'

export default defineComponent({
    components: { 
        MyTyper,
        HeroImage
    },
    setup() {
        const phrases = ref(['hi, my name is asad ali', 'i am a vuejs developer', 'i love tailwind css', 'welcome to my uniek blog'])

        return { phrases }
    },
})
</script>
