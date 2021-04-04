<template>
    <div class="bg-transparent bg-effect shadow-xl">
        <div class="relative w-screen lg:w-2/3 xl:w-3/5 py-5 px-8 mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="nav-logo">
                <span class="text-indigo-500 text-3xl font-extrabold capitalize select-none font-logo-font">uniek</span>
            </div>
            <div class="nav-links capitalize flex flex-row flex-wrap justify-center items-center mt-6 md:mt-0 space-x-5">
                <nav-link class="select-none font-extralight text-indigo-300 hover:text-indigo-500 text-lg" v-for="(link, index) in links" :key="index" :link="link" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Link } from './NavLink/Link'
import linksJSON from './NavLink/links.json'
import NavLink from './NavLink/NavLink.vue'

export default defineComponent({
    name: 'NavBar',
    components: {
        NavLink
    },
    setup() {
        const links = ref(new Array<Link>())
        links.value = linksJSON
        return { links }
    },
})
</script>

<style>
.bg-effect {
    backdrop-filter: blur(5px);
}
</style>
