---
title: Bento grid
description: Bento grid is a layout used to showcase the features of a product in a simple and elegant way.
---

<ComponentPreview name="BentoDemo" />

## Installation

### Copy and paste the following code into your project

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Play as PlayIcon, X as XIcon } from 'lucide-vue-next'

interface HeroVideoProps {
    videoSrc: string
    thumbnailSrc: string
    thumbnailAlt?: string
}

const props = defineProps<HeroVideoProps>()

const isVideoOpen = ref(false)
const isCloseHovered = ref(false)
const isPlayHovered = ref(false)

const openVideo = () => {
    isVideoOpen.value = true
}
const closeVideo = () => {
    isVideoOpen.value = false
}
</script>

<template>
    <div class="relative">
        <div
            class="relative cursor-pointer"
            @click="openVideo">
            <img
                :src="thumbnailSrc"
                :alt="thumbnailAlt"
                width="1920"
                height="1080"
                class="w-full rounded-2xl" />
            <div class="absolute inset-0 flex items-center justify-center">
                <div
                    class="border border-neutral-800 flex items-center justify-center rounded-full backdrop-blur-md transition-transform duration-300 ease-out size-24"
                    @mouseenter="isPlayHovered = true"
                    @mouseleave="isPlayHovered = false">
                    <div
                        class="flex items-center justify-center border border-neutral-800 rounded-full size-20 transition-all ease-out duration-300 backdrop-blur-2xl relative"
                        :class="isPlayHovered ? 'scale-105' : 'scale-100'">
                        <PlayIcon
                            class="size-8 text-white"
                            :style="{
                                transform: isPlayHovered
                                    ? 'scale(1.1)'
                                    : 'scale(1)',
                            }" />
                    </div>
                </div>
            </div>
        </div>

        <div
            v-if="isVideoOpen"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
            <div
                ref="videoContainer"
                class="relative w-full max-w-4xl aspect-video mx-4 md:mx-0">
                <button
                    class="absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 transition-transform duration-200 ease-out"
                    @click="closeVideo"
                    @mouseenter="isCloseHovered = true"
                    @mouseleave="isCloseHovered = false"
                    :class="{ 'scale-110': isCloseHovered }">
                    <XIcon class="size-5" />
                </button>

                <div
                    class="size-full border-2 border-white rounded-2xl overflow-hidden isolate z-[1] relative transition-transform duration-200 ease-out"
                    :style="{
                        transform: isCloseHovered ? 'scale(0.98)' : 'scale(1)',
                    }">
                    <iframe
                        :src="videoSrc"
                        class="size-full rounded-2xl"
                        allowfullscreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
```

## Props

<APITable type="prop" :data='[
  {
    "name": "videoSrc",
    "description": "URL of the video to be played.",
    "type": "string",
    "required": true,
    "default": ""
  },
  {
    "name": "thumbnailSrc",
    "description": "URL of the thumbnail image.",
    "type": "string",
    "required": true,
    "default": ""
  },
  {
    "name": "thumbnailAlt",
    "description": "Alt text for the thumbnail image.",
    "type": "string",
    "required": false,
    "default": "Video thumbnail"
  }
]
'/>

## Note

-   If using a YouTube video, make sure to use the `embed` version of the video URL.
