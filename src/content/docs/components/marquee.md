---
title: Marquee
description: An infinite scrolling component that can be used to display text, images, or videos.
---

<ComponentPreview name="MarqueeDemo" />

## Installation

<Steps>

### Copy and paste the following code into your project

```vue
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


const props = defineProps<MarqueeProps>()


const {
    className = '',
    reverse = false,
    pauseOnHover = false,
    vertical = false,
    repeat = 4,
    ...restProps
} = props
</script>

```

### Update `tailwind.config.js`

Add the following animations to your `tailwind.config.js` file:

```js title="tailwind.config.js" {5-18}
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
};
```

</Steps>

## Examples

### Vertical

<ComponentPreview name="MarqueeVerticalDemo" />

### 3D

<ComponentPreview name="Marquee3DDemo" />

## Props

<APITable type="prop" :data='[
{
"name": "className",
"description": "The class name to apply to the component.",
"type": "string",
"required": false,
"default": ""
},
{
"name": "reverse",
"description": "Whether or not to reverse the direction of the marquee.",
"type": "boolean",
"required": false,
"default": "false"
},
{
"name": "pauseOnHover",
"description": "Whether or not to pause the marquee when the user hovers over the component.",
"type": "boolean",
"required": false,
"default": "false"
},
{
"name": "vertical",
"description": "Whether or not to display the marquee vertically.",
"type": "boolean",
"required": false,
"default": "false"
},
{
"name": "children",
"description": "The content to display in the marquee.",
"type": "node",
"required": true,
"default": ""
},
{
"name": "repeat",
"description": "The number of times to repeat the content.",
"type": "number",
"required": false,
"default": "1"
}
]
'/>
