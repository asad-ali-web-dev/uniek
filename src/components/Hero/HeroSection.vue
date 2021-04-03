<template>
    <section class="text-gray-600 w-11/12 md:w-6/7 lg:w-4/5 xl:w-2/3 xxl:w-1/2 mx-auto">
        <div class="container px-5 pt-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-3xl font-extrabold title-font mb-4 text-gray-600">Welcome to <span class="uppercase">uniek</span></h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
            </div>
        </div>
        <div class="flex flex-wrap -m-4">
            <hero-image v-for="(image, index) in 4" :key="index" :index="index" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeroImage from './HeroImage/HeroImage.vue'

export default defineComponent({
    components: { 
        HeroImage 
    },
    setup() {
        
    },
})
</script>
