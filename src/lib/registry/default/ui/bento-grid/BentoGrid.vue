<template>
  <div :class="['grid w-full auto-rows-[22rem] grid-cols-3 gap-4', className]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  className?: string;
}>();
</script>
