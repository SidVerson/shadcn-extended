<script setup lang="ts">
import { Marquee } from '@/lib/registry/default/ui/marquee'
import ReviewCard from './ReviewCard.vue'
const logos = [
    {
        name: 'Microsoft',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYglsy9_TEorHs0WeIy4wAlfNBmKG3fqy4MA&s',
    },
    {
        name: 'Apple',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s',
    },
    {
        name: 'Google',
        img: 'https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj',
    },
    {
        name: 'Facebook',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsFNOCwNdo843YWnxCwuSHjhoFGueNrX3Yg&s',
    },
    {
        name: 'LinkedIn',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s',
    },
    {
        name: 'Twitter',
        img: 'https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid',
    },
]
</script>

<template>
    <div
        class="relative flex h-full w-96 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border bg-background px-20 md:shadow-xl">
        <div class="flex flex-row gap-4 [perspective:300px]">
            <Marquee
                className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
                vertical
                :style="{
                    transform:
                        'translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)',
                }">
                <img
                    v-for="(data, idx) in logos"
                    :key="idx"
                    :src="data.img"
                    :alt="data.name"
                    class="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300" />
            </Marquee>
        </div>

        <div
            class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div
            class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
</template>
