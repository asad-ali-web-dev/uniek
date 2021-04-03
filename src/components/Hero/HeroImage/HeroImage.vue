<template>
    <div class="lg:w-1/2 sm:w-1/2 p-2">
        <div class="flex relative h-72">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" :src="`https://picsum.photos/60${index}/50${index}`">
          <div class="transition-opacity duration-500 cursor-pointer px-8 py-10 relative z-10 w-full border-4 border-yellow-300 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 uppercase">Catagory</h2>
            <h1 class="title-font text-lg font-bold text-yellow-600 mb-3 capitalize">post title {{ index + 1 }}</h1>
            <p class="leading-relaxed text-gray-500">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['index'],
    setup() {
        
    },
})
</script>
