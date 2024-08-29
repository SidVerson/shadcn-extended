const e=`<template>
    <section
        className="max-w-5xl mx-auto h-screen flex flex-col justify-center items-center px-7 lg:px-0 relative">
        <div className="relative rounded-2xl p-1 overflow-hidden">
            <HeroVideoDialog
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { HeroVideoDialog } from '@/lib/registry/default/ui/hero-video-dialog'
<\/script>
`;export{e as default};
