<template>
    <div
        v-bind="props"
        :class="
            cn(
                'group/item flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
                {
                    'flex-row': !vertical,
                    'flex-col': vertical,
                },
                className
            )
        ">
        <div
            v-for="n in repeat"
            :key="n"
            :class="
                cn('flex shrink-0 justify-around [gap:var(--gap)]', {
                    'animate-marquee flex-row': !vertical,
                    'animate-marquee-vertical flex-col': vertical,
                    'group-hover/item:[animation-play-state:paused]':
                        pauseOnHover,
                    '[animation-direction:reverse]': reverse,
                })
            ">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { cn } from '@/lib/utils'

interface MarqueeProps {
    className?: string
    reverse?: boolean
    pauseOnHover?: boolean
    vertical?: boolean
    repeat?: number
    [key: string]: any
}

// Define props using defineProps() from Vue's Composition API
const props = defineProps<MarqueeProps>()

// Extract props for usage in template
const {
    className = '',
    reverse = false,
    pauseOnHover = false,
    vertical = false,
    repeat = 4,
    ...restProps
} = props
</script>
