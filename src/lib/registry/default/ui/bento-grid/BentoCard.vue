<template>
    <div
        :class="[
            'group/item relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
            'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
            'transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
            className,
        ]">
        <div>
            <slot name="background" />
        </div>
        <div
            class="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover/item:-translate-y-10">
            <component
                :is="Icon"
                class="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover/item:scale-75" />
            <h3
                class="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                {{ name }}
            </h3>
            <p class="max-w-lg text-neutral-400">{{ description }}</p>
        </div>

        <div
            class="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover/item:translate-y-0 group-hover/item:opacity-100">
            <Button
                variant="ghost"
                asChild
                size="sm"
                class="pointer-events-auto">
                <a :href="href">
                    {{ cta }}
                    <MoveRight class="ml-2 h-4 w-4" />
                </a>
            </Button>
        </div>
        <div
            class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover/item:bg-black/[.03] group-hover/item:dark:bg-neutral-800/10" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

import { MoveRight } from 'lucide-vue-next'
import { Button } from '@/lib/registry/default/ui/button' // Assuming Button is a local component

const props = defineProps<{
    name: string
    className?: string
    Icon: any
    description: string
    href: string
    cta: string
}>()
</script>
