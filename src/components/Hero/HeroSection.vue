<template>
    <section class="text-gray-600 w-11/12 md:w-6/7 lg:w-4/5 xl:w-2/3 xxl:w-1/2 mx-auto">
        <div class="container pt-8 pb-3 mx-auto px-2">
            <div class="flex flex-col justify-center text-center w-1/2 bg-purple-200 py-2 mx-auto">
                <h1 class="sm:text-xl text-lg font-extrabold title-font text-gray-600">
                    <!-- <span class="pr-3">Welcome to</span> -->
                    <span class="lowercase font-mono text-gray-500">
                        <my-typer :keywords="phrases" />
                    </span>
                </h1>
            </div>
        </div>
        <div class="grid lg:grid-cols-3 lg:grid-rows-3 grid-cols-2 grid-rows-auto grid-flow-row-dense">
            <hero-image class="lg:first:col-span-2 lg:first:row-span-2 sm:row-span-1 sm:col-span-1 col-span-2" v-for="(image, index) in 6" :key="index" :index="index" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeroImage from './HeroImage/HeroImage.vue'
import MyTyper from './Typer/MyTyper.vue'

export default defineComponent({
    components: { 
        HeroImage,
        MyTyper 
    },
    setup() {
        const phrases = ref(['hi, my name is asad ali', 'i am a vuejs developer', 'i love tailwind css', 'welcome to my uniek blog'])

        return { phrases }
    },
})
</script>
