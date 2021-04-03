<template>
    <div class="bg-yellow-300 border-b-4 border-yellow-200">
        <div class="relative w-screen lg:w-2/3 xl:w-3/5 py-6 px-8 mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="nav-logo">
                <span class="text-gray-600 text-3xl font-extrabold uppercase select-none">uniek</span>
            </div>
            <div class="nav-links capitalize flex flex-row flex-wrap justify-center items-center mt-6 md:mt-0 space-x-5">
                <nav-link class="select-none md:font-bold text-gray-600 hover:text-yellow-600 text-lg" v-for="(link, index) in links" :key="index" :link="link" />
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
