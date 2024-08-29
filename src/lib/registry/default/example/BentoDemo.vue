<template>
    <BentoGrid className="lg:grid-rows-3">
        <BentoCard
            v-for="feature in features"
            :key="feature.name"
            :name="feature.name"
            :className="feature.className"
            :Icon="feature.Icon"
            :description="feature.description"
            :href="feature.href"
            :cta="feature.cta">
            <template #background>
                <img class="absolute -right-20 -top-20 opacity-60" />
            </template>
        </BentoCard>
    </BentoGrid>
</template>

<script setup lang="ts">
import { BentoGrid, BentoCard } from '@/lib/registry/default/ui/bento-grid'

import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    TextCursorInput,
} from 'lucide-vue-next'

const features = [
    {
        Icon: FileTextIcon,
        name: 'Save your files',
        description: 'We automatically save your files as you type.',
        href: '/',
        cta: 'Learn more',
        className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
        Icon: TextCursorInput,
        name: 'Full text search',
        description: 'Search through all your files in one place.',
        href: '/',
        cta: 'Learn more',
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
        Icon: GlobeIcon,
        name: 'Multilingual',
        description: 'Supports 100+ languages and counting.',
        href: '/',
        cta: 'Learn more',
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
        Icon: CalendarIcon,
        name: 'Calendar',
        description: 'Use the calendar to filter your files by date.',
        href: '/',
        cta: 'Learn more',
        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
        Icon: BellIcon,
        name: 'Notifications',
        description:
            'Get notified when someone shares a file or mentions you in a comment.',
        href: '/',
        cta: 'Learn more',
        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
]
</script>
