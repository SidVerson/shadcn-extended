---
title: Kbd
description: Display a keyboard key in a text block.
---

<ComponentPreview name="KbdDemo" />

## Installation

### Copy and paste the following code into your project

```vue
<script setup lang="ts">
import { computed } from 'vue'

interface KbdProps {
    as?: string
    size?: 'xs' | 'sm' | 'md'
}

const props = withDefaults(defineProps<KbdProps>(), {
    as: 'kbd',
    size: 'sm',
})

const kbdClass = computed(() => {
    const baseClass =
        'inline-flex items-center pointer-events-none h-5 select-none gap-1 rounded-md border border-border bg-muted font-sans font-medium'

    const sizeClasses = {
        xs: 'min-h-4 text-[10px] h-4 px-1',
        sm: 'min-h-5 text-[11px] h-5 px-1',
        md: 'min-h-6 text-[12px] h-6 px-1.5',
    }

    return `${baseClass} ${sizeClasses[props.size || 'sm']}`
})
</script>

<template>
    <component
        :is="props.as"
        :class="kbdClass">
        <slot />
    </component>
</template>
```

## Props

<APITable type="prop" :data='[
{
"name": "as",
"description": "The HTML tag to use for rendering the component.",
"type": "string",
"required": false,
"default": "kbd"
},
{
"name": "size",
"description": "The size of the component. Determines the height and font size.",
"type": "xs | sm | md",
"required": false,
"default": "sm"
}
]'/>
