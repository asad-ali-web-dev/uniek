<template>
    <a :href="href" :target="target">{{ alias }}</a>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue'
import { Link } from './Link'

export default defineComponent({
    props: {
        link: {
            type: Object as PropType<Link>,
            default(this: void) {
                return {
                    alias: 'link',
                    href: '#',
                    newTab: false
                }
            },
            validator(this: void, link: Link) {
                return !!link.alias && !!link.href
            }
        }
    },
    setup(props) {
        const alias = ref(props.link.alias)
        const href = ref(props.link.href)
        const newTab = ref(props.link.newTab)

        const target = computed(() => {
            return newTab.value ? '_blank' : '_self'
        })

        return { alias, href, target }
    },
})
</script>
